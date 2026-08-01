function StockCard({ stock, onBuy }) {
  return (
    <div className="bg-[#131A2A] rounded-2xl p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold">
            {stock.symbol}
          </h2>

          <p className="text-gray-400">
            {stock.company}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            {stock.exchange} • {stock.sector}
          </p>

        </div>

        <div className="text-right">

          <h2 className="text-2xl font-bold">
            ₹{stock.price.toLocaleString()}
          </h2>

          <button
            onClick={() => onBuy(stock)}
            className="mt-3 bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-xl"
          >
            Buy
          </button>

        </div>

      </div>

    </div>
  );
}

export default StockCard;