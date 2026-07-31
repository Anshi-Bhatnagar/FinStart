import { useState } from "react";

function AssessmentForm({ onGenerate }) {
  const [goal, setGoal] = useState("");
  const [investment, setInvestment] = useState("");
  const [horizon, setHorizon] = useState("");
  const [experience, setExperience] = useState("");
  const [lossReaction, setLossReaction] = useState("");
  const [preference, setPreference] = useState("");

  const handleSubmit = () => {
    if (
      !goal ||
      !investment ||
      !horizon ||
      !experience ||
      !lossReaction ||
      !preference
    ) {
      alert("Please fill all fields.");
      return;
    }

    let score = 0;

    // Investment Goal
    if (goal === "Wealth Creation") score += 20;
    else if (goal === "Retirement") score += 12;
    else if (goal === "Child Education") score += 10;
    else if (goal === "Buying a House") score += 8;
    else score += 5;

    // Monthly Investment
    if (investment === "₹20,000+") score += 20;
    else if (investment === "₹10,000") score += 15;
    else if (investment === "₹5,000") score += 10;
    else score += 5;

    // Investment Horizon
    if (horizon === "More than 5 Years") score += 20;
    else if (horizon === "3-5 Years") score += 15;
    else if (horizon === "1-3 Years") score += 10;
    else score += 5;

    // Experience
    if (experience === "Experienced") score += 20;
    else if (experience === "Intermediate") score += 12;
    else score += 5;

    // Loss Reaction
    if (lossReaction === "Buy More") score += 20;
    else if (lossReaction === "Wait for Recovery") score += 12;
    else score += 5;

    // Preferred Investment
    if (preference === "Crypto") score += 20;
    else if (preference === "Stocks") score += 15;
    else if (preference === "Mutual Funds") score += 10;
    else if (preference === "Gold") score += 7;
    else score += 5;

    let risk = "";

    if (score >= 90) risk = "High";
    else if (score >= 60) risk = "Medium";
    else risk = "Low";

    onGenerate({
      score,
      risk,
      goal,
      investment,
      horizon,
      experience,
      lossReaction,
      preference,
    });
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

      <h2 className="text-3xl font-bold text-white mb-2">
        AI Risk Assessment
      </h2>

      <p className="text-slate-400 mb-8">
        Discover your investment personality.
      </p>

      <div className="space-y-6">

        {/* Goal */}

        <div>
          <label className="text-white block mb-2">
            Investment Goal
          </label>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-3 text-white"
          >
            <option value="">Select</option>
            <option>Wealth Creation</option>
            <option>Retirement</option>
            <option>Child Education</option>
            <option>Buying a House</option>
            <option>Emergency Fund</option>
          </select>
        </div>

        {/* Investment */}

        <div>
          <label className="text-white block mb-2">
            Monthly Investment
          </label>

          <select
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-3 text-white"
          >
            <option value="">Select</option>
            <option>₹1,000</option>
            <option>₹5,000</option>
            <option>₹10,000</option>
            <option>₹20,000+</option>
          </select>
        </div>

        {/* Horizon */}

        <div>
          <label className="text-white block mb-2">
            Investment Horizon
          </label>

          <select
            value={horizon}
            onChange={(e) => setHorizon(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-3 text-white"
          >
            <option value="">Select</option>
            <option>Less than 1 Year</option>
            <option>1-3 Years</option>
            <option>3-5 Years</option>
            <option>More than 5 Years</option>
          </select>
        </div>

        {/* Experience */}

        <div>
          <label className="text-white block mb-2">
            Investment Experience
          </label>

          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-3 text-white"
          >
            <option value="">Select</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Experienced</option>
          </select>
        </div>

        {/* Loss */}

        <div>
          <label className="text-white block mb-2">
            If your investment falls by 20%, what will you do?
          </label>

          <select
            value={lossReaction}
            onChange={(e) => setLossReaction(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-3 text-white"
          >
            <option value="">Select</option>
            <option>Sell Immediately</option>
            <option>Wait for Recovery</option>
            <option>Buy More</option>
          </select>
        </div>

        {/* Preference */}

        <div>
          <label className="text-white block mb-2">
            Preferred Investment
          </label>

          <select
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-3 text-white"
          >
            <option value="">Select</option>
            <option>Fixed Deposit</option>
            <option>Gold</option>
            <option>Mutual Funds</option>
            <option>Stocks</option>
            <option>Crypto</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl text-white font-semibold"
        >
          Analyze My Risk
        </button>

      </div>

    </div>
  );
}

export default AssessmentForm;