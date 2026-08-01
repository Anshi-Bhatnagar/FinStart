import { useState, useEffect } from "react";

function SellStockModal({
  open,
  onClose,
  holding,
}) {
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    setQuantity("");
  }, [holding]);

  if (!open || !holding) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Sold ${quantity} shares of ${holding.stock_symbol}`
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-[#131A2A] rounded-2xl p-8 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6">
          Sell Stock
        </h2>

        <div className="space-y-3 mb-6">

          <p>
            <span className="text-gray-400">
              Stock :
            </span>{" "}
            {holding.stock_symbol}
          </p>

          <p>
            <span className="text-gray-400">
              Company :
            </span>{" "}
            {holding.company_name}
          </p>

          <p>
            <span className="text-gray-400">
              Available Quantity :
            </span>{" "}
            {holding.quantity}
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="number"
            min="1"
            max={holding.quantity}
            placeholder="Quantity"
            value={quantity}
            onChange={(e) =>
              setQuantity(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-[#1D263A] outline-none"
            required
          />

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
            >
              Sell
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default SellStockModal;