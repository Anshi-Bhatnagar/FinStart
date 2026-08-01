import { tradeHistory } from "../../data/paperTradeHistoryData";

function TradeHistory() {
  return (
    <div className="mt-14">

      <h2 className="text-3xl font-bold mb-6">
        Trade History
      </h2>

      <div className="bg-[#131A2A] rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1B2335]">

            <tr>

              <th className="text-left p-4">
                Type
              </th>

              <th className="text-left p-4">
                Stock
              </th>

              <th className="text-left p-4">
                Quantity
              </th>

              <th className="text-left p-4">
                Price
              </th>

              <th className="text-left p-4">
                Total
              </th>

              <th className="text-left p-4">
                Time
              </th>

            </tr>

          </thead>

          <tbody>

            {tradeHistory.map((trade) => (

              <tr
                key={trade.id}
                className="border-b border-gray-700 hover:bg-[#1D263A]"
              >

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      trade.type === "BUY"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {trade.type}
                  </span>

                </td>

                <td className="p-4">

                  <h3 className="font-semibold">
                    {trade.stock_symbol}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {trade.company_name}
                  </p>

                </td>

                <td className="p-4">
                  {trade.quantity}
                </td>

                <td className="p-4">
                  ₹{trade.price.toLocaleString()}
                </td>

                <td className="p-4 font-semibold">
                  ₹{trade.total.toLocaleString()}
                </td>

                <td className="p-4 text-gray-400">
                  {trade.time}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TradeHistory;