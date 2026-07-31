import { useState, useEffect } from "react";

function TradeModal({ stock, onClose }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (stock) {
      setQuantity(1);
    }
  }, [stock]);

  if (!stock) return null;

  const total = stock.currentPrice * quantity;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-[#131A2A] w-full max-w-2xl rounded-3xl p-8 relative max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Header */}
        <div>

          <h2 className="text-3xl font-bold text-white">
            {stock.symbol}
          </h2>

          <p className="text-gray-400 mt-1">
            {stock.company}
          </p>

        </div>

        {/* Current Price */}
        <div className="mt-8">

          <p className="text-gray-400">
            Current Price
          </p>

          <h1 className="text-5xl font-bold text-white mt-2">
            ₹{stock.currentPrice.toLocaleString()}
          </h1>

        </div>

        {/* Market Statistics */}
        <div className="mt-10">

          <h3 className="text-xl font-semibold text-white mb-4">
            Market Statistics
          </h3>

          <div className="grid grid-cols-2 gap-4">

            <StatCard title="Open" value={`₹${stock.open}`} />

            <StatCard title="High" value={`₹${stock.high}`} />

            <StatCard title="Low" value={`₹${stock.low}`} />

            <StatCard
              title="Previous Close"
              value={`₹${stock.previousClose}`}
            />

            <StatCard
              title="52W High"
              value={`₹${stock.high52}`}
            />

            <StatCard
              title="52W Low"
              value={`₹${stock.low52}`}
            />

          </div>

        </div>

        {/* Quantity */}
        <div className="mt-10">

          <p className="text-gray-400 mb-4">
            Quantity
          </p>

          <div className="flex items-center gap-5">

            <button
              onClick={() =>
                setQuantity(Math.max(1, quantity - 1))
              }
              className="w-12 h-12 rounded-xl bg-[#1E293B] hover:bg-[#2D3748] text-xl"
            >
              −
            </button>

            <span className="text-2xl font-bold">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-12 h-12 rounded-xl bg-[#1E293B] hover:bg-[#2D3748] text-xl"
            >
              +
            </button>

          </div>

        </div>

        {/* Estimated Cost */}
        <div className="mt-10 bg-[#1E293B] rounded-2xl p-5">

          <p className="text-gray-400">
            Estimated Cost
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ₹{total.toLocaleString()}
          </h2>

        </div>

        {/* About */}
        <div className="mt-10">

          <h3 className="text-xl font-semibold">
            About Company
          </h3>

          <p className="text-gray-400 leading-7 mt-4">
            {stock.description}
          </p>

        </div>

        {/* Buttons */}
        <div className="flex gap-5 mt-10">

          <button
            className="flex-1 bg-green-600 hover:bg-green-700 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Buy Stock
          </button>

          <button
            className="flex-1 bg-red-600 hover:bg-red-700 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Sell Stock
          </button>

        </div>

      </div>

    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-[#1E293B] rounded-xl p-4">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <p className="text-lg font-semibold mt-2">
        {value}
      </p>

    </div>
  );
}

export default TradeModal;