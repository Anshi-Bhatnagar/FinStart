from app.ai.tools.market_data import get_stock_price
from app.ai.tools.market_news import get_company_news


TOOL_MAP = {
    "price": get_stock_price,
    "news": get_company_news,
}


def execute_tool(tool_name: str, symbol: str):

    tool = TOOL_MAP.get(tool_name)

    if tool is None:
        return None

    return tool(symbol)