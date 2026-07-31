# from google import genai
# from google.genai import types
# from dotenv import load_dotenv
# import os
# import time
# import json
# from app.ai.registry_tool import TOOLS
# from app.ai.tools.market_data import get_stock_price
# from app.ai.tools.market_news import get_company_news,get_news
# from app.ai.prompts import SYSTEM_PROMPT


# load_dotenv()

# # Read API key
# my_api_key = os.getenv("GEMINI_API_KEY")
# system_prompt=SYSTEM_PROMPT

# client = genai.Client(api_key=my_api_key)

# # print(my_api_key)



# def generate_response(user_input:str,system_prompt:str,use_tools=False):

#     def is_broad_market_query(query):
#        q = query.lower()

#        keywords = [
#         "all stock",
#         "all stocks",
#         "all companies",
#         "every company",
#         "entire market",
#         "all us",
#         "all nse",
#         "all nasdaq",
#         "all nyse"
#     ]

#        return any(k in q for k in keywords)

#     if is_broad_market_query(user_input):
#        return {
#         "status": "unsupported_request",
#         "message": "I can't display live prices for every listed company. Please ask for a specific company, an index, top gainers, or top losers."
#        }

#     FINANCE_KEYWORDS = [
#     "stock", "share", "invest", "investment", "mutual fund",
#     "sip", "etf", "market", "finance", "bank", "loan",
#     "insurance", "tax", "budget", "portfolio", "dividend",
#     "economy", "inflation", "risk","price","buy","sell"
#     ]
#     def is_finance_query(query):
#        q = query.lower()
#        return any(keyword in q for keyword in FINANCE_KEYWORDS)

#     if not is_finance_query(user_input):
#         return {
#         "status": "out_of_scope",
#         "feature": "general",
#         "message": "I'm FinBuddy. I can help with finance, investing, markets, banking, taxation and financial literacy."
#     }

# # Otherwise call Gemini

#     max_retries=3

#     for attempt in range(max_retries):
#      conversations=[user_input]
#      while True:

#         try:
#             response = client.models.generate_content(
#                 model="gemini-3.1-flash-lite",
#                 contents=conversations,
#                 config=types.GenerateContentConfig(
#                     system_instruction=system_prompt,
#                     tools=TOOLS if use_tools else None,
#                     temperature=0.3,
#                     response_mime_type= "application/json"
#                 ),
        
       
       
#             )
#             candidate=response.candidates[0]
#             part=candidate.content.parts[0]
            
#             if getattr(part, "function_call", None):
#                 function_name=part.function_call.name
#                 args=dict(part.function_call.args)
#                 print("Function Name:", part.function_call.name)
#                 print("Arguments:", dict(part.function_call.args))

#                 # execute fxn
#                 TOOL_MAP = {
#                  "get_stock_price": get_stock_price,
#                  "get_company_news": get_company_news,
#                  "get_news": get_news,
#                 }  
#                 tool = TOOL_MAP.get(function_name)

#                 if tool is None:
#                   raise ValueError(...)

#                 result = tool(**args)

#                 conversations.append(part)

#                 conversations.append(
#                 types.Part.from_function_response(
#                 name=function_name,
#                 response=result
#             )
#         )

#                 continue

#             break
#                 # send the fxn result back to gemini
#             response=client.models.generate_content(
#                     model="gemini-3.1-flash-lite",
                   
#                     contents=[
#                         user_input,
#                         part,
#                         types.Part.from_function_response(
#                             name=function_name,
#                             response=result,
#                         ),
#                     ],
#                     config=types.GenerateContentConfig(
#                     system_instruction=system_prompt,
#                     response_mime_type="application/json")
#                 )

#             data=json.loads(response.text)
#             return data

#         except Exception as e:
#             error = str(e)

#             if "503" in error:
#                 wait_time = 2 ** attempt
#                 print(f"Gemini busy. Retrying in {wait_time} seconds...")
#                 time.sleep(wait_time)
#                 continue

#             return f"Error: {error}"

#     return "FinBuddy is currently experiencing high demand. Please try again in a few moments."





from google import genai
from google.genai import types
from dotenv import load_dotenv
import os
import json
import time

from app.ai.registry_tool import TOOLS
from app.ai.tools.market_data import get_stock_price
from app.ai.tools.market_news import get_company_news, get_news
from app.ai.prompts import SYSTEM_PROMPT

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

TOOL_MAP = {
    "get_stock_price": get_stock_price,
    "get_company_news": get_company_news,
    "get_news": get_news,
}


def generate_response(user_input: str,
                      system_prompt: str = SYSTEM_PROMPT,
                      use_tools: bool = False):

    # ---------------------------
    # Broad market query check
    # ---------------------------
    def is_broad_market_query(query):
        q = query.lower()

        keywords = [
            "all stock",
            "all stocks",
            "all companies",
            "every company",
            "entire market",
            "all us",
            "all nse",
            "all nasdaq",
            "all nyse",
        ]

        return any(k in q for k in keywords)

    if is_broad_market_query(user_input):
        return {
            "status": "unsupported_request",
            "message": "I can't display live prices for every listed company. Please ask for a specific company, an index, top gainers, or top losers."
        }

    # ---------------------------
    # Finance check
    # ---------------------------
    FINANCE_KEYWORDS = [
        "stock",
        "share",
        "invest",
        "investment",
        "mutual fund",
        "sip",
        "etf",
        "market",
        "finance",
        "bank",
        "loan",
        "insurance",
        "tax",
        "budget",
        "portfolio",
        "dividend",
        "economy",
        "inflation",
        "risk",
        "price",
        "buy",
        "sell","scam","risk",

    ]

    def is_finance_query(query):
        q = query.lower()
        return any(word in q for word in FINANCE_KEYWORDS)

    if not is_finance_query(user_input):
        return {
            "status": "out_of_scope",
            "feature": "general",
            "message": "I'm FinBuddy. I can help with finance, investing, banking, taxation, and financial literacy.",
        }

    # ---------------------------
    # Conversation
    # ---------------------------
        
    conversation = [user_input]

# ---------------------------
# Live Data Check
# ---------------------------
    LIVE_KEYWORDS = [
    "today",
    "current",
    "latest",
    "live",
    "price",
    "stock price",
    "share price",
    "quote",
    "market news",
    "news",
    "earnings",
]

    def needs_live_data(query):
      q = query.lower()
      return any(k in q for k in LIVE_KEYWORDS)

    use_tools = needs_live_data(user_input)

    MAX_TOOL_LOOPS = 5
    MAX_RETRIES = 3

    for retry in range(MAX_RETRIES):

      try:

        for _ in range(MAX_TOOL_LOOPS):

            response = client.models.generate_content(
                model="gemini-3.1-flash-lite",
                contents=conversation,
                config=types.GenerateContentConfig(
                    system_instruction=system_prompt,
                    tools=TOOLS if use_tools else None,
                    temperature=0.3,
                    response_mime_type="application/json",
                ),
            )

            candidate = response.candidates[0]

            function_calls = []

            for part in candidate.content.parts:
                if getattr(part, "function_call", None):
                    function_calls.append(part)

            # -------------------------
            # Final Answer
            # -------------------------
            if not function_calls:

                try:
                    return json.loads(response.text)
                except Exception:
                    return response.text

            # Save assistant response
            conversation.append(candidate.content)

            tool_parts = []

            # -------------------------
            # Execute ALL tool calls
            # -------------------------
            for part in function_calls:

                function_name = part.function_call.name
                args = dict(part.function_call.args)

                print(f"\nFunction Name: {function_name}")
                print(f"Arguments: {args}")

                tool = TOOL_MAP.get(function_name)

                if tool is None:

                    result = {
                        "status": "error",
                        "message": f"Unknown tool: {function_name}"
                    }

                else:

                    try:
                        result = tool(**args)
                    except Exception as e:
                        result = {
                            "status": "error",
                            "message": str(e)
                        }

                tool_parts.append(
                    types.Part.from_function_response(
                        name=function_name,
                        response=result,
                    )
                )

            # Give ALL tool responses back to Gemini
            conversation.extend(tool_parts)

        return {
            "status": "error",
            "message": "Maximum tool iterations reached."
        }

      except Exception as e:

        if retry == MAX_RETRIES - 1:
            raise e

        time.sleep(2 ** retry)