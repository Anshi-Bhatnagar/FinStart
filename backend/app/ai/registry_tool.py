from google.genai import types

stock_tool=types.FunctionDeclaration(
    name="get_stock_price",
    description=(
    "Returns the latest real-time stock price for ONE listed company's ticker symbol "
    "(examples: AAPL, MSFT, TSLA, RELIANCE, TCS, INFY). "
    "Do NOT use for market indices, exchanges, or requests for all companies."
    ),
    parameters={
        "type":"object",
        "properties":{
            "symbol":{
                "type":"string"
            }
        },
        "required":["symbol"]
    }
)

news_tool=types.FunctionDeclaration(
    name="get_news",
    description="returns the latest real time news",
    parameters={
        "type":"object",
        "properties":{
            "symbol":{
                "type":"string"
            }
        },
        "required":["symbol"]
    }

)

company_news_tool=types.FunctionDeclaration(
    name="get_company_news",
    description="returns the latest real time news",
    parameters={
        "type":"object",
        "properties":{
            "symbol":{
                "type":"string"
            }
        },
        "required":["symbol"]
    }

)



TOOLS=[
    types.Tool(
        function_declarations=[stock_tool,news_tool,company_news_tool]
    )
]