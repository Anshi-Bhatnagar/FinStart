import { performance } from "../../data/paperPerformanceData";

function PerformanceCard() {
  return (
    <div className="mt-14">

      <h2 className="text-3xl font-bold mb-6">
        Portfolio Performance
      </h2>

      <div className="bg-[#131A2A] rounded-2xl p-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>

            <p className="text-gray-400">
              Total Investment
            </p>

            <h2 className="text-3xl font-bold mt-2">
              ₹{performance.totalInvestment.toLocaleString()}
            </h2>

          </div>

          <div>

            <p className="text-gray-400">
              Current Value
            </p>

            <h2 className="text-3xl font-bold mt-2">
              ₹{performance.currentValue.toLocaleString()}
            </h2>

          </div>

          <div>

            <p className="text-gray-400">
              Overall Profit
            </p>

            <h2 className="text-3xl font-bold mt-2 text-green-400">
              +₹{performance.overallProfit.toLocaleString()}
            </h2>

          </div>

          <div>

            <p className="text-gray-400">
              Returns
            </p>

            <h2 className="text-3xl font-bold mt-2 text-green-400">
              +{performance.profitPercentage}%
            </h2>

          </div>

        </div>

        {/* Progress */}

        <div className="mt-10">

          <div className="flex justify-between mb-2">

            <span>
              Portfolio Growth
            </span>

            <span>
              {performance.profitPercentage}%
            </span>

          </div>

          <div className="h-3 rounded-full bg-[#1D263A]">

            <div
              className="h-3 rounded-full bg-green-500"
              style={{
                width: `${performance.profitPercentage}%`,
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default PerformanceCard;