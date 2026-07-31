import {
  FaWallet,
  FaChartLine,
  FaCoins,
  FaArrowTrendUp,
} from "react-icons/fa6";

function SummaryCard({ title, value, subtitle }) {

  const icons = {
    "Available Cash": <FaWallet />,
    "Invested Amount": <FaCoins />,
    "Today's Gain": <FaChartLine />,
    "Total Returns": <FaArrowTrendUp />,
  };

  return (
    <div className="bg-[#131A2A] rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 hover:scale-105">

      <div className="flex justify-between items-start">

        <div>
          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-2xl font-bold mt-2 text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="text-green-400 mt-2 text-sm">
              {subtitle}
            </p>
          )}
        </div>

        <div className="text-3xl text-violet-400">
          {icons[title]}
        </div>

      </div>

    </div>
  );
}

export default SummaryCard;