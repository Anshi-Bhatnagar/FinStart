MOCK_PRICES = {
    "TCS": 112.50,
    "INFY": 1540.00,
    "RELIANCE": 2450.00,
    "HDFCBANK": 1680.00,
    "ICICIBANK": 1195.00
}


def get_current_price(symbol: str):

    return MOCK_PRICES.get(symbol.upper(), 100.0)