import re


PRICE_KEYWORDS = {
    "price",
    "stock price",
    "share price",
    "current price",
    "trading at",
}

NEWS_KEYWORDS = {
    "news",
    "latest news",
    "headlines",
    "updates",
}

COMPANIES = {
    "TCS",
    "INFY",
    "RELIANCE",
    "HDFCBANK",
    "SBIN",
    "ICICIBANK",
    "AAPL",
    "MSFT",
    "GOOG",
    "TSLA",
}


def detect_tool(question: str):
    question_lower = question.lower()

    company = None

    for symbol in COMPANIES:
        if symbol.lower() in question_lower:
            company = symbol
            break

    if company:

        if any(keyword in question_lower for keyword in PRICE_KEYWORDS):
            return {
                "tool": "price",
                "symbol": company,
            }

        if any(keyword in question_lower for keyword in NEWS_KEYWORDS):
            return {
                "tool": "news",
                "symbol": company,
            }

    return None