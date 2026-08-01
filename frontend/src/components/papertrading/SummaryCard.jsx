import {
  FaWallet,
  FaMoneyBillWave,
  FaChartPie,
  FaChartLine,
  FaArrowTrendUp,
  FaPercent,
} from "react-icons/fa6";

const icons = {
  "Virtual Wallet": <FaWallet />,
  "Available Cash": <FaMoneyBillWave />,
  "Invested Amount": <FaChartPie />,
  "Portfolio Value": <FaChartLine />,
  "Overall Profit/Loss": <FaArrowTrendUp />,
  "Return %": <FaPercent />,
};

function SummaryCard({ title, value, color = "text-white" }) {
  return (
    <div className="bg-[#131A2A] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">

      <div className="flex justify-between items-start">

        <div>
          <p className="text-gray-400 text-sm">{title}</p>

          <h2 className={`text-2xl font-bold mt-3 ${color}`}>
            {value}
          </h2>
        </div>

        <div className="text-3xl text-violet-400">
          {icons[title]}
        </div>

      </div>

    </div>
  );
}

export default SummaryCard;