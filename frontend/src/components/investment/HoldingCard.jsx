function HoldingCard({ stock, onTrade }) {

  const profit =
    (stock.currentPrice - stock.avgPrice) * stock.quantity;

  const percentage = (
    ((stock.currentPrice - stock.avgPrice) /
      stock.avgPrice) *
    100
  ).toFixed(2);

  const marketValue =
    stock.currentPrice * stock.quantity;

  const isProfit = profit >= 0;

  return (

    <div className="bg-[#131A2A] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">

      <div className="flex justify-between items-start">

        <div className="flex gap-4">

          <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-lg font-bold">
            {stock.symbol[0]}
          </div>

          <div>

            <h2 className="text-xl font-semibold text-white">
              {stock.symbol}
            </h2>

            <p className="text-gray-400 text-sm">
              {stock.company}
            </p>

          </div>

        </div>

        <div
          className={`font-bold ${
            isProfit
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {isProfit ? "+" : ""}
          {percentage}%
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">

        <div>
          <p className="text-gray-400 text-sm">
            Quantity
          </p>

          <p className="font-semibold">
            {stock.quantity}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Average Price
          </p>

          <p className="font-semibold">
            ₹{stock.avgPrice.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Current Price
          </p>

          <p className="font-semibold">
            ₹{stock.currentPrice.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Market Value
          </p>

          <p className="font-semibold">
            ₹{marketValue.toLocaleString()}
          </p>
        </div>

      </div>

      <div className="flex justify-between items-center mt-8">

        <div>

          <p className="text-gray-400 text-sm">
            Profit / Loss
          </p>

          <h3
            className={`text-xl font-bold ${
              isProfit
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {isProfit ? "+" : ""}
            ₹{profit.toLocaleString()}
          </h3>

        </div>

        <button
          onClick={() => onTrade(stock)}
          className="bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-xl transition"
        >
          Trade
        </button>

      </div>

    </div>

  );
}

export default HoldingCard;