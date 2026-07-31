from app.ai.gemini_client import generate_response

from app.ai.prompts import FINANCIAL_BUDDY_PROMPT


from app.ai.prompts import RISK_PROFILE_PROMPT,SCAM_DETECTION_PROMPT,TRADE_FEEDBACK_PROMPT  



import json

#  ai_chatbot
def chat_with_user(question:str):
    response =generate_response(
    user_input=question,
    system_prompt=FINANCIAL_BUDDY_PROMPT,
    use_tools=True
     )
    return response


#  analyse_risk

def generate_risk_profile(questionnaire:str):
    return generate_response(
        user_input=json.dumps(questionnaire, indent=2),
        system_prompt=RISK_PROFILE_PROMPT,
        use_tools=False
    )

#  analyze_scam

def analyze_scam(message:str):
    return generate_response(
        user_input=message,
        system_prompt=SCAM_DETECTION_PROMPT,
        use_tools=False
    )

#  trade_feedback




def generate_trade_feedback(
    risk_profile: dict,
    portfolio: dict,
    trade_details: dict
):
    data = {
        "risk_profile": risk_profile,
        "portfolio": portfolio,
        "trade_details": trade_details
    }

    return generate_response(
        user_input=json.dumps(data, indent=2),
        system_prompt=TRADE_FEEDBACK_PROMPT,
        use_tools=False
    )