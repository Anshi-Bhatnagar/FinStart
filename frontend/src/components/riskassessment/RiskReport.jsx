function RiskReport({ data, onRetake }) {
  const report = {
    Low: {
      level: "🟢 Conservative Investor",
      color: "text-green-400",
      portfolio: "70% Debt • 20% Index Funds • 10% Gold",
      description:
        "You prefer safety and stable returns over high-risk investments.",
      tips: [
        "Build an emergency fund before investing.",
        "Start SIPs in Index or Hybrid Mutual Funds.",
        "Avoid investing all your money in one asset.",
        "Review your portfolio once every year.",
      ],
    },

    Medium: {
      level: "🟡 Balanced Investor",
      color: "text-yellow-400",
      portfolio: "60% Equity • 30% Mutual Funds • 10% Gold",
      description:
        "You are comfortable taking moderate risks for better long-term returns.",
      tips: [
        "Continue monthly SIP investments.",
        "Diversify between equity and debt.",
        "Increase investments as your income grows.",
        "Stay invested during market corrections.",
      ],
    },

    High: {
      level: "🔴 Aggressive Investor",
      color: "text-red-400",
      portfolio: "70% Equity • 20% Mutual Funds • 10% Gold",
      description:
        "You can tolerate market volatility for potentially higher returns.",
      tips: [
        "Invest with a long-term mindset.",
        "Avoid emotional buying and selling.",
        "Diversify even if you like high-growth assets.",
        "Review and rebalance your portfolio every 6 months.",
      ],
    },
  };

  const result = report[data.risk];

  return (
    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

      <h2 className="text-3xl font-bold text-white text-center">
        AI Risk Assessment Result
      </h2>

      <p className="text-center text-slate-400 mt-2">
        Based on your answers, here's your personalized investment profile.
      </p>

      {/* Score */}

      <div className="mt-10 flex justify-center">

        <div className="w-44 h-44 rounded-full border-[10px] border-indigo-500 flex flex-col justify-center items-center">

          <h1 className="text-5xl font-bold text-white">
            {data.score}
          </h1>

          <span className="text-slate-400">
            /120
          </span>

        </div>

      </div>

      {/* Risk Level */}

      <div className="text-center mt-8">

        <h3 className={`text-3xl font-bold ${result.color}`}>
          {result.level}
        </h3>

        <p className="text-slate-400 mt-3">
          {result.description}
        </p>

      </div>

      {/* Portfolio */}

      <div className="mt-10 bg-slate-800 rounded-2xl p-6">

        <h4 className="text-xl font-semibold text-white">
          Suggested Portfolio
        </h4>

        <p className="text-indigo-400 text-lg mt-3">
          {result.portfolio}
        </p>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-2 gap-5 mt-8">

        <div className="bg-slate-800 rounded-2xl p-5">

          <h4 className="text-white font-semibold">
            Investment Goal
          </h4>

          <p className="text-slate-400 mt-2">
            {data.goal}
          </p>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5">

          <h4 className="text-white font-semibold">
            Monthly Investment
          </h4>

          <p className="text-slate-400 mt-2">
            {data.investment}
          </p>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5">

          <h4 className="text-white font-semibold">
            Investment Horizon
          </h4>

          <p className="text-slate-400 mt-2">
            {data.horizon}
          </p>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5">

          <h4 className="text-white font-semibold">
            Experience
          </h4>

          <p className="text-slate-400 mt-2">
            {data.experience}
          </p>

        </div>

      </div>

      {/* AI Recommendations */}

      <div className="mt-10">

        <h3 className="text-2xl font-bold text-white mb-5">
          AI Recommendations
        </h3>

        <div className="space-y-4">

          {result.tips.map((tip) => (
            <div
              key={tip}
              className="bg-slate-800 rounded-xl p-4 text-slate-300"
            >
              ✅ {tip}
            </div>
          ))}

        </div>

      </div>

      {/* Button */}

      <button
        onClick={onRetake}
        className="mt-10 w-full bg-indigo-600 hover:bg-indigo-500 transition py-3 rounded-xl text-white font-semibold"
      >
        Retake Assessment
      </button>

    </div>
  );
}

export default RiskReport;