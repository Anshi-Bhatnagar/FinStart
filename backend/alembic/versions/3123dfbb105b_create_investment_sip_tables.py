"""create investment sip tables

Revision ID: 3123dfbb105b
Revises: dc32f1c9ebcb
Create Date: 2026-07-31 16:17:54.664166

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "3123dfbb105b"
down_revision: Union[str, Sequence[str], None] = "dc32f1c9ebcb"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""

    op.create_table(
        "investments",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.Column("sip_name", sa.String(), nullable=False),
        sa.Column("description", sa.String(), nullable=True),
        sa.Column("risk_level", sa.String(), nullable=True),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("now()"),
            nullable=True,
        ),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_index(
        op.f("ix_investments_id"),
        "investments",
        ["id"],
        unique=False,
    )

    op.create_table(
        "investment_holdings",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("investment_id", sa.Integer(), nullable=False),
        sa.Column("stock_symbol", sa.String(), nullable=False),
        sa.Column("company_name", sa.String(), nullable=False),
        sa.Column("sector", sa.String(), nullable=True),
        sa.Column("exchange", sa.String(), nullable=True),
        sa.Column("quantity", sa.Integer(), nullable=False),
        sa.Column("average_buy_price", sa.Float(), nullable=False),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("now()"),
            nullable=True,
        ),
        sa.ForeignKeyConstraint(
            ["investment_id"],
            ["investments.id"],
            ondelete="CASCADE",
        ),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_index(
        op.f("ix_investment_holdings_id"),
        "investment_holdings",
        ["id"],
        unique=False,
    )

    op.create_table(
        "investment_transactions",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("investment_id", sa.Integer(), nullable=False),
        sa.Column("holding_id", sa.Integer(), nullable=False),
        sa.Column("transaction_type", sa.String(), nullable=False),
        sa.Column("stock_symbol", sa.String(), nullable=False),
        sa.Column("company_name", sa.String(), nullable=False),
        sa.Column("quantity", sa.Integer(), nullable=False),
        sa.Column("price", sa.Float(), nullable=False),
        sa.Column("total_amount", sa.Float(), nullable=False),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("now()"),
            nullable=True,
        ),
        sa.ForeignKeyConstraint(
            ["holding_id"],
            ["investment_holdings.id"],
            ondelete="CASCADE",
        ),
        sa.ForeignKeyConstraint(
            ["investment_id"],
            ["investments.id"],
            ondelete="CASCADE",
        ),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_index(
        op.f("ix_investment_transactions_id"),
        "investment_transactions",
        ["id"],
        unique=False,
    )


def downgrade() -> None:
    """Downgrade schema."""

    op.drop_index(
        op.f("ix_investment_transactions_id"),
        table_name="investment_transactions",
    )

    op.drop_table("investment_transactions")

    op.drop_index(
        op.f("ix_investment_holdings_id"),
        table_name="investment_holdings",
    )

    op.drop_table("investment_holdings")

    op.drop_index(
        op.f("ix_investments_id"),
        table_name="investments",
    )

    op.drop_table("investments")