from app.database import SessionLocal
from app.models.lesson import Lesson

db = SessionLocal()

try:
    if db.query(Lesson).count() > 0:
        print("Lessons already exist.")
    else:
        lessons = [
            # Basics
            Lesson(
                category_id=1,
                title="Introduction to Investing",
                description="Learn what investing is.",
                content="Basic investing concepts.",
                difficulty="Beginner",
                duration_minutes=10,
                order_number=1,
            ),
            Lesson(
                category_id=1,
                title="Risk vs Return",
                description="Understand investment risk.",
                content="Risk and return relationship.",
                difficulty="Beginner",
                duration_minutes=12,
                order_number=2,
            ),

            # Stock Market
            Lesson(
                category_id=2,
                title="What is a Stock?",
                description="Introduction to stocks.",
                content="Stocks represent ownership.",
                difficulty="Beginner",
                duration_minutes=15,
                order_number=3,
            ),
            Lesson(
                category_id=2,
                title="Stock Exchanges",
                description="NSE & BSE overview.",
                content="How stock exchanges work.",
                difficulty="Intermediate",
                duration_minutes=15,
                order_number=4,
            ),

            # Mutual Funds
            Lesson(
                category_id=3,
                title="Mutual Fund Basics",
                description="Introduction to mutual funds.",
                content="Pooling money for investments.",
                difficulty="Beginner",
                duration_minutes=12,
                order_number=5,
            ),
            Lesson(
                category_id=3,
                title="SIP Explained",
                description="Systematic Investment Plan.",
                content="How SIP works.",
                difficulty="Beginner",
                duration_minutes=10,
                order_number=6,
            ),

            # Personal Finance
            Lesson(
                category_id=4,
                title="Budgeting Basics",
                description="Create a monthly budget.",
                content="Budget planning.",
                difficulty="Beginner",
                duration_minutes=8,
                order_number=7,
            ),
            Lesson(
                category_id=4,
                title="Emergency Fund",
                description="Importance of emergency savings.",
                content="Build an emergency fund.",
                difficulty="Beginner",
                duration_minutes=8,
                order_number=8,
            ),
        ]

        db.add_all(lessons)
        db.commit()

        print("✅ Lessons seeded successfully!")

finally:
    db.close()