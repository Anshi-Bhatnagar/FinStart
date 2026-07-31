import { useState } from "react";
import SummaryCard from "./SummaryCard";
import PortfolioChart from "./PortfolioChart";
import HoldingCard from "./HoldingCard";
import TradeModal from "./TradeModal";

import { portfolioSummary } from "../../data/portfolioData";
import { holdings } from "../../data/holdingsData";

function PortfolioTab() {
  const [selectedStock, setSelectedStock] = useState(null);

  return (
    <>
      {/* Portfolio Overview */}
      <div className="bg-gradient-to-r from-violet-700 to-indigo-700 rounded-3xl p-10 mb-8">

        <p className="text-violet-200">
          Portfolio Value
        </p>

        <h1 className="text-5xl font-bold mt-3">
          ₹ {portfolioSummary.portfolioValue.toLocaleString()}
        </h1>

        <p className="text-green-300 mt-4">
          ↑ ₹{portfolioSummary.todaysGain.toLocaleString()} Today
        </p>

      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <SummaryCard
          title="Available Cash"
          value={`₹ ${portfolioSummary.availableCash.toLocaleString()}`}
        />

        <SummaryCard
          title="Invested Amount"
          value={`₹ ${portfolioSummary.investedAmount.toLocaleString()}`}
        />

        <SummaryCard
          title="Today's Gain"
          value={`₹ ${portfolioSummary.todaysGain.toLocaleString()}`}
          subtitle={`+${portfolioSummary.gainPercentage}% Today`}
        />

        <SummaryCard
          title="Total Returns"
          value={`₹ ${portfolioSummary.totalReturns.toLocaleString()}`}
          subtitle={`+${portfolioSummary.totalReturnPercentage}% Overall`}
        />

      </div>

      {/* Portfolio Chart */}
      <PortfolioChart />

      {/* Holdings */}
      <div className="mt-10">

        <h2 className="text-2xl font-semibold mb-6">
          Your Holdings
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

          {holdings.map((stock) => (
            <HoldingCard
              key={stock.id}
              stock={stock}
              onTrade={setSelectedStock}
            />
          ))}

        </div>

      </div>

      {/* Trade Modal */}
      <TradeModal
        stock={selectedStock}
        onClose={() => setSelectedStock(null)}
      />
    </>
  );
}

export default PortfolioTab;