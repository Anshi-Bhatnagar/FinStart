import { useNavigate } from "react-router-dom";
import { FaChartLine } from "react-icons/fa6";

function PaperTradingCard() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/paper-trading")}
      className="cursor-pointer bg-gradient-to-r from-violet-700 to-indigo-700 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Paper Trading
          </h2>

          <p className="text-violet-100 mt-2">
            Practice stock trading with virtual money.
          </p>
        </div>

        <FaChartLine className="text-6xl text-white opacity-80" />
      </div>
    </div>
  );
}

export default PaperTradingCard;