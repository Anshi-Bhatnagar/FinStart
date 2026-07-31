import os
import requests
from datetime import date, timedelta
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("FINNHUB_NEWS_API_KEY")
# print(API_KEY)

COMPANY_NEWS_URL = "https://finnhub.io/api/v1/company-news"
MARKET_NEWS_URL = "https://finnhub.io/api/v1/news"


def get_company_news(symbol: str):
    today = date.today()
    from_date = today - timedelta(days=7)

    response = requests.get(
        COMPANY_NEWS_URL,
        params={
            "symbol": symbol,
            "from": from_date.isoformat(),
            "to": today.isoformat(),
            "token": API_KEY,
        },
    )

    # print("URL:", response.url)
    # print("Status:", response.status_code)
    # print("Response:", response.text)

    response.raise_for_status()

    data = response.json()

    return {
        "symbol": symbol.upper(),
        "articles": data[:5]      # return top 5 news articles
    }


# for market latest news

def get_news(symbol: str):
    response = requests.get(
        MARKET_NEWS_URL,
        params={
            "category":"general",
            "token": API_KEY,
        },
    )


    # print("URL:", response.url)
    # print("Status:", response.status_code)
    # print("Response:", response.text)


    response.raise_for_status()

    data = response.json()

    return {
        "symbol": symbol.upper(),
        "articles": data[:10]      # return top 5 news articles
    }