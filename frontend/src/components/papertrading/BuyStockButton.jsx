import { FaPlus } from "react-icons/fa6";

function BuyStockButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-semibold transition"
    >
      <FaPlus />
      Buy Stock
    </button>
  );
}

export default BuyStockButton;