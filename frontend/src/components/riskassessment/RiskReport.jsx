function RiskReport({ data, onRetake }) {

  const report = {
    Low: {
      score: 35,
      level: "🟢 Low Risk",
      personality: "Conservative Investor",
      portfolio: "70% Debt • 20% Index Funds • 10% Gold",
      tips: [
        "Build Emergency Fund",
        "Start SIP",
        "Invest for Long Term",
      ],
    },

    Medium: {
      score: 65,
      level: "🟡 Medium Risk",
      personality: "Balanced Investor",
      portfolio: "60% Index Funds • 30% Debt • 10% Gold",
      tips: [
        "Continue SIP",
        "Diversify Investments",
        "Review Portfolio Annually",
      ],
    },

    High: {
      score: 85,
      level: "🔴 High Risk",
      personality: "Aggressive Investor",
      portfolio: "70% Equity • 20% Index Funds • 10% Gold",
      tips: [
        "Avoid Overtrading",
        "Diversify Portfolio",
        "Maintain Emergency Fund",
      ],
    },
  };

  const result = report[data.risk];

  return (
    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

      <h2 className="text-3xl font-bold text-white">
        Your AI Risk Report
      </h2>

      <div className="mt-8 text-center">

        <h1 className="text-6xl font-bold text-indigo-400">
          {result.score}
        </h1>

        <p className="text-slate-400">Risk Score</p>

        <h3 className="text-2xl mt-4 font-semibold text-white">
          {result.level}
        </h3>

      </div>

      <div className="mt-10 space-y-6">

        <div>
          <h4 className="text-white font-semibold">
            Investment Personality
          </h4>

          <p className="text-slate-400">
            {result.personality}
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold">
            Suggested Portfolio
          </h4>

          <p className="text-slate-400">
            {result.portfolio}
          </p>
        </div>

        <div>

          <h4 className="text-white font-semibold mb-3">
            AI Recommendations
          </h4>

          <ul className="space-y-2">

            {result.tips.map((tip) => (
              <li key={tip} className="text-slate-400">
                ✔ {tip}
              </li>
            ))}

          </ul>

        </div>

      </div>

      <button
        onClick={onRetake}
        className="mt-10 w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl text-white font-semibold"
      >
        Retake Assessment
      </button>

    </div>
  );
}

export default RiskReport;