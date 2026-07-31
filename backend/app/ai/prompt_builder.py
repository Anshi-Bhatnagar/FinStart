def build_chat_prompt(
    user_context: dict,
    user_message: str,
    chat_history: list = None,
) -> str:

    wallet = user_context.get("wallet_balance", 0)
    portfolio = user_context.get("portfolio_summary", {})
    investments = user_context.get("investments", [])
    goals = user_context.get("goals", [])

    prompt = f"""
You are FinStart AI.

You are a friendly financial education assistant.

IMPORTANT RULES:
- Always answer using the user's financial data when relevant.
- Never invent wallet balances or investments.
- If information is unavailable, politely say so.
- Give educational guidance, not financial guarantees.
- Keep answers concise unless the user asks for details.

==============================
USER FINANCIAL DATA
==============================

Wallet Balance:
₹{wallet}

Portfolio Summary:
{portfolio}

Investments:
"""

    if investments:
        for inv in investments:
            prompt += f"""
- SIP Name: {inv['sip_name']}
  Description: {inv['description']}
  Risk Level: {inv['risk_level']}
"""
    else:
        prompt += "\nNo investments found.\n"

    prompt += "\nGoals:\n"

    if goals:
        for goal in goals:
            prompt += f"""
- {goal['title']}
  Target: ₹{goal['target_amount']}
  Current: ₹{goal['current_amount']}
"""
    else:
        prompt += "\nNo goals found.\n"

    # ==============================
    # Recent Conversation
    # ==============================
    if chat_history:
        prompt += """
==============================
RECENT CONVERSATION
==============================

"""

        for chat in chat_history:
            prompt += f"{chat.role.capitalize()}: {chat.message}\n"

    prompt += f"""

==============================
USER QUESTION
==============================

{user_message}

Answer naturally.
"""

    return prompt