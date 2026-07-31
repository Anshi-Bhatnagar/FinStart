from app.database import SessionLocal
from app.models.learn_category import LearnCategory


def seed():

    db = SessionLocal()

    try:

        if db.query(LearnCategory).count() > 0:
            print("Learn categories already exist.")
            return

        categories = [
            LearnCategory(
                name="Basics",
                description="Learn the fundamentals of investing.",
                icon="BookOpen",
            ),
            LearnCategory(
                name="Stock Market",
                description="Learn stock market concepts.",
                icon="TrendingUp",
            ),
            LearnCategory(
                name="Mutual Funds",
                description="Learn mutual fund investing.",
                icon="Wallet",
            ),
            LearnCategory(
                name="Personal Finance",
                description="Learn personal finance concepts.",
                icon="PiggyBank",
            ),
        ]

        db.add_all(categories)
        db.commit()

        print("✅ Learn categories seeded successfully!")

    except Exception as e:
        db.rollback()
        print(f"❌ Error: {e}")

    finally:
        db.close()


if __name__ == "__main__":
    seed()