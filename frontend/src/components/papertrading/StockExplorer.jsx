import { useState } from "react";
import { stocks } from "../../data/stocksData";
import StockCard from "./StockCard";

function StockExplorer() {
  const [search, setSearch] = useState("");

  const filteredStocks = stocks.filter(
    (stock) =>
      stock.symbol
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      stock.company
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="mt-14">

      <h2 className="text-3xl font-bold mb-6">
        Explore Stocks
      </h2>

      <input
        type="text"
        placeholder="Search stocks..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full md:w-96 mb-6 bg-[#131A2A] p-3 rounded-xl"
      />

      <div className="grid lg:grid-cols-2 gap-6">

        {filteredStocks.map((stock) => (

          <StockCard
            key={stock.id}
            stock={stock}
            onBuy={() =>
              alert(
                `Buy ${stock.symbol}`
              )
            }
          />

        ))}

      </div>

    </div>
  );
}

export default StockExplorer;