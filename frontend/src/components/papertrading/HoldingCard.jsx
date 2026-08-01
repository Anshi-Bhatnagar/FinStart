function HoldingCard({ holding, onSell }) {
  const marketValue =
    holding.quantity * holding.current_price;

  const profit =
    (holding.current_price -
      holding.average_buy_price) *
    holding.quantity;

  const percentage = (
    ((holding.current_price -
      holding.average_buy_price) /
      holding.average_buy_price) *
    100
  ).toFixed(2);

  const isProfit = profit >= 0;

  return (
    <div className="bg-[#131A2A] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">

      {/* Header */}
      <div className="flex justify-between items-start">

        <div className="flex gap-4">

          <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-lg font-bold text-white">
            {holding.stock_symbol[0]}
          </div>

          <div>

            <h2 className="text-xl font-semibold text-white">
              {holding.stock_symbol}
            </h2>

            <p className="text-gray-400 text-sm">
              {holding.company_name}
            </p>

          </div>

        </div>

        <div
          className={`text-lg font-bold ${
            isProfit
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {isProfit ? "+" : ""}
          {percentage}%
        </div>

      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-6 mt-8">

        <div>
          <p className="text-gray-400 text-sm">
            Quantity
          </p>

          <p className="text-white font-semibold">
            {holding.quantity}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Average Buy Price
          </p>

          <p className="text-white font-semibold">
            ₹{holding.average_buy_price.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Current Price
          </p>

          <p className="text-white font-semibold">
            ₹{holding.current_price.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Market Value
          </p>

          <p className="text-white font-semibold">
            ₹{marketValue.toLocaleString()}
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-8">

        <div>

          <p className="text-gray-400 text-sm">
            Profit / Loss
          </p>

          <h2
            className={`text-xl font-bold ${
              isProfit
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {isProfit ? "+" : ""}
            ₹{profit.toLocaleString()}
          </h2>

        </div>

        <button
          onClick={() => onSell(holding)}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
        >
          Sell
        </button>

      </div>

    </div>
  );
}

export default HoldingCard;