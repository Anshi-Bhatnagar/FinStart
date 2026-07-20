import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaWallet,
  FaChartPie,
} from "react-icons/fa6";

function PaperTrading() {
  const holdings = [
    {
      company: "Reliance",
      qty: 12,
      price: "₹1,520",
      change: "+3.8%",
      profit: true,
    },
    {
      company: "TCS",
      qty: 8,
      price: "₹3,920",
      change: "+1.4%",
      profit: true,
    },
    {
      company: "Infosys",
      qty: 10,
      price: "₹1,680",
      change: "-2.1%",
      profit: false,
    },
  ];

  return (
    <section className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-xl">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Paper Trading
          </h2>

          <p className="text-slate-400 mt-1">
            Practice investing without risking real money.
          </p>

        </div>

        <div className="bg-indigo-600 px-5 py-3 rounded-xl text-white font-semibold">
          Virtual Mode
        </div>

      </div>

      {/* Balance Cards */}

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-slate-800 rounded-2xl p-6">

          <div className="flex items-center gap-3 text-green-400">

            <FaWallet />

            <span>Virtual Balance</span>

          </div>

          <h1 className="text-3xl text-white font-bold mt-4">
            ₹1,00,000
          </h1>

        </div>

        <div className="bg-slate-800 rounded-2xl p-6">

          <div className="flex items-center gap-3 text-blue-400">

            <FaChartPie />

            <span>Portfolio Value</span>

          </div>

          <h1 className="text-3xl text-white font-bold mt-4">
            ₹1,08,450
          </h1>

        </div>

        <div className="bg-slate-800 rounded-2xl p-6">

          <div className="flex items-center gap-3 text-emerald-400">

            <FaArrowTrendUp />

            <span>Total Return</span>

          </div>

          <h1 className="text-3xl font-bold text-green-400 mt-4">
            +8.45%
          </h1>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-8">

        <button className="bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-xl text-white font-semibold">
          Buy Stock
        </button>

        <button className="bg-red-500 hover:bg-red-600 transition px-8 py-3 rounded-xl text-white font-semibold">
          Sell Stock
        </button>

        <button className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-3 rounded-xl text-white font-semibold">
          View Portfolio
        </button>

      </div>

      {/* Holdings */}

      <div className="mt-10">

        <h3 className="text-xl text-white font-semibold mb-5">
          Current Holdings
        </h3>

        <div className="space-y-4">

          {holdings.map((stock) => (

            <div
              key={stock.company}
              className="bg-slate-800 rounded-2xl p-5 flex justify-between items-center hover:bg-slate-700 transition"
            >

              <div>

                <h4 className="text-white font-semibold text-lg">
                  {stock.company}
                </h4>

                <p className="text-slate-400">
                  {stock.qty} Shares
                </p>

              </div>

              <div className="text-right">

                <p className="text-white font-semibold">
                  {stock.price}
                </p>

                <div
                  className={`flex items-center justify-end gap-2 ${
                    stock.profit
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >

                  {stock.profit ? (
                    <FaArrowTrendUp />
                  ) : (
                    <FaArrowTrendDown />
                  )}

                  {stock.change}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PaperTrading;