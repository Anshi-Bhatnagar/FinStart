import { useState } from "react";
import TradeHistory from "../components/paperTrading/TradeHistory";
import SummaryCard from "../components/paperTrading/SummaryCard";
import HoldingCard from "../components/paperTrading/HoldingCard";
import BuyStockButton from "../components/paperTrading/BuyStockButton";
import BuyStockModal from "../components/paperTrading/BuyStockModal";
import SellStockModal from "../components/paperTrading/SellStockModal";
import PerformanceCard from "../components/paperTrading/PerformanceCard";
import { portfolio } from "../data/paperPortfolioData";
import { holdings } from "../data/paperHoldingsData";
import SearchBar from "../components/paperTrading/SearchBar";
import SortDropdown from "../components/paperTrading/SortDropdown";
import StockExplorer from "../components/paperTrading/StockExplorer";
import SectionNavigation from "../components/paperTrading/SectionNavigation";
import Layout from "../components/layout/Layout";

function PaperTrading() {
  const [showBuyModal, setShowBuyModal] = useState(false);

  const [showSellModal, setShowSellModal] = useState(false);

  const [selectedHolding, setSelectedHolding] = useState(null);

  const [search, setSearch] = useState("");

const [sortBy, setSortBy] = useState("default");
const filteredHoldings = [...holdings]
  .filter((holding) => {
    return (
      holding.stock_symbol
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      holding.company_name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  })
  .sort((a, b) => {
    const profitA =
      (a.current_price - a.average_buy_price) *
      a.quantity;

    const profitB =
      (b.current_price - b.average_buy_price) *
      b.quantity;

    const valueA =
      a.current_price * a.quantity;

    const valueB =
      b.current_price * b.quantity;

    switch (sortBy) {
      case "profitHigh":
        return profitB - profitA;

      case "profitLow":
        return profitA - profitB;

      case "valueHigh":
        return valueB - valueA;

      case "valueLow":
        return valueA - valueB;

      case "alphabetical":
        return a.stock_symbol.localeCompare(
          b.stock_symbol
        );

      default:
        return 0;
    }
  });
  return (
  <Layout>
    <div className="min-h-screen bg-[#0B1120] text-white">

      <div className="max-w-7xl mx-auto p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-bold">
              Paper Trading
            </h1>

            <p className="text-gray-400 mt-2">
              Practice stock trading with virtual money.
            </p>

          </div>

          <BuyStockButton
            onClick={() => setShowBuyModal(true)}
          />

        </div>
        <SectionNavigation />
        {/* Portfolio Banner */}

        <section id="overview">

<div className="bg-gradient-to-r from-violet-700 to-indigo-700 rounded-3xl p-8 mb-10">

          <p className="text-violet-200">
            Portfolio Value
          </p>

          <h1 className="text-5xl font-bold mt-3">
            ₹{portfolio.portfolioValue.toLocaleString()}
          </h1>

          <p className="text-green-300 mt-3 text-lg">
            +₹{portfolio.overallProfit.toLocaleString()} Overall Profit
          </p>

        </div>

        {/* Summary Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <SummaryCard
            title="Virtual Wallet"
            value={`₹${portfolio.virtualWallet.toLocaleString()}`}
          />

          <SummaryCard
            title="Available Cash"
            value={`₹${portfolio.availableCash.toLocaleString()}`}
          />

          <SummaryCard
            title="Invested Amount"
            value={`₹${portfolio.investedAmount.toLocaleString()}`}
          />

          <SummaryCard
            title="Portfolio Value"
            value={`₹${portfolio.portfolioValue.toLocaleString()}`}
          />

          <SummaryCard
            title="Overall Profit/Loss"
            value={`₹${portfolio.overallProfit.toLocaleString()}`}
            color="text-green-400"
          />

          <SummaryCard
            title="Return %"
            value={`${portfolio.profitPercentage}%`}
            color="text-green-400"
          />

        </div>
        </section>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

        

        <div className="flex gap-4">

       

        </div>

        </div>
        {/* Holdings */}

        <section id="holdings" className="mt-8">

         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

    <h2 className="text-3xl font-bold">
      My Holdings
    </h2>

    <div className="flex gap-4 mt-4 md:mt-0">

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <SortDropdown
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

    </div>

  </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

  {filteredHoldings.length > 0 ? (

    filteredHoldings.map((holding) => (

      <HoldingCard
        key={holding.id}
        holding={holding}
        onSell={(stock) => {
          setSelectedHolding(stock);
          setShowSellModal(true);
        }}
      />

    ))

  ) : (

    <div className="col-span-full bg-[#131A2A] rounded-2xl p-10 text-center">

      <h3 className="text-2xl font-semibold">
        No Holdings Found
      </h3>

      <p className="text-gray-400 mt-2">
        Try changing your search or filter.
      </p>

    </div>

  )}

</div>

        
        </section>
      </div>
   <section id="history">

<TradeHistory />

</section>
    <section id="analytics">

<PerformanceCard />



</section>
    
    <section id="market">

<StockExplorer />

</section>
      {/* Buy Modal */}

      <BuyStockModal
        open={showBuyModal}
        onClose={() => setShowBuyModal(false)}
      />

      {/* Sell Modal */}

      <SellStockModal
        open={showSellModal}
        holding={selectedHolding}
        onClose={() => {
          setShowSellModal(false);
          setSelectedHolding(null);
        }}
      />

    </div>
     </Layout>
  );
}

export default PaperTrading;