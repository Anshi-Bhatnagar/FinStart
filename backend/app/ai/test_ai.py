from app.ai.ai_service import chat_with_user, generate_risk_profile,analyze_scam

# Test Chat
question = '''
A person promised 50% monthly guaranteed returns. Is this a scam?
# Tell me today's Apple stock price.

# Give me the latest Apple news.

# Compare it with Microsoft.

# Explain the risks.

# Finally suggest what I should learn next.'''
#

chat_response = chat_with_user(question)

print("===== Chat Response =====")
print(chat_response)

# # Test Risk Profile
# questionnaire = {
#     "age": 22,
#     "investment_experience": "Beginner",
#     "investment_horizon": "Long Term",
#     "monthly_investment": 5000,
#     "market_drop_reaction": "Hold investment",
#     "primary_goal": "Wealth Creation"
# }

# risk_response = generate_risk_profile(questionnaire)

# print("\n===== Risk Profile =====")
# print(risk_response)

# # test scam-message
# scam_message ='''Congratulations! You have won ₹25 lakh.
# Click the link below and pay ₹499 processing fees.
# Share your OTP to claim your reward.'''

# scam_detection_response=analyze_scam(scam_message)
# print("\n===== Scam-analysis =====")
# print(scam_detection_response)

# # test trading-feedback

# from app.ai.ai_service import generate_trade_feedback

# risk_profile = {
#     "category": "Moderate"
# }

# portfolio = {
#     "stocks": [
#         "TCS",
#         "Infosys",
#         "HDFC Bank"
#     ]
# }

# trade = {
#     "action": "BUY",
#     "stock": "Reliance",
#     "quantity": 5
# }

# response = generate_trade_feedback(
#     risk_profile,
#     portfolio,
#     trade
# )
# print("\n===== trading-Feedback =====")
# print(response)