import os
import requests
from dotenv import load_dotenv

load_dotenv()



API_KEY = os.getenv("TWELVE_DATA_API_KEY")

BASE_URL = "https://api.twelvedata.com/price"



# def get_stock_price(symbol: str):
#     SYMBOL_MAP = {
#     "RELIANCE.NS": "RELIANCE:NSE",
#     "TCS.NS": "TCS:NSE",
#     "INFY.NS": "INFY:NSE",
#     }

#     symbol = SYMBOL_MAP.get(symbol.upper(), symbol)
#     response = requests.get(
#         BASE_URL,
#         params={
#             "symbol": symbol,
#             "exchange": "NSE",
#             "apikey": API_KEY
#         }
#     )

#     response.raise_for_status()

#     data = response.json()

#     if "price" not in data:
#         raise Exception(data)

#     return {
#         "symbol": symbol.upper(),
#         "current_price": float(data["price"])
#     }


def get_stock_price(symbol: str):
    INVALID_SYMBOLS = {
    "NIFTY 50",
    "NSE",
    "BSE",
    "ALL",
    "ALL NSE",
    "ALL COMPANIES"
    }

    if symbol.upper() in INVALID_SYMBOLS:
       return {
        "status": "unsupported_request",
        "message": "Please specify a company's stock symbol such as RELIANCE, TCS, INFY, or AAPL."
    }
    params = {
        "symbol": symbol.upper(),
        "apikey": API_KEY
    }

    response = requests.get(BASE_URL, params=params)
    data = response.json()
    # print(data)

    if response.status_code != 200 or "price" not in data:
        # raise Exception(data)
        if response.status_code==404:
          return {
        "status":"error",
        "error_type":"invalid_symbol",
        "message":"The stock symbol `symbol` was not found.",
        "suggestion":"Please check the ticker symbol and try again."
      }

    
    
    return {
    "symbol": symbol.upper(),
    "current_price": float(data["price"])
}