from app.ai.ai_service import chat_with_user

from app.ai.tool_selector import detect_tool

from app.ai.tools.market_data import get_stock_price
from app.ai.tools.market_news import get_company_news
from app.ai.tool_executor import execute_tool


def generate_ai_response(prompt: str, user_question: str):
    """
    AI Orchestrator

    Responsibilities:
    1. Detect if a tool is needed.
    2. Execute the tool.
    3. Inject tool output into the prompt.
    4. Send the final prompt to Gemini.
    """

    tool = detect_tool(user_question)

    # No tool required
    if tool is None:
        return chat_with_user(prompt)

    tool_result = execute_tool(
        tool["tool"],
        tool["symbol"],
    )

    if tool_result:

        prompt += f"""

==============================
LIVE TOOL RESULT
==============================

{tool_result}

"""

    return chat_with_user(prompt)