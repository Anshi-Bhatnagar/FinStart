import { useState } from "react";

function AssessmentForm({ onGenerate }) {
  const [goal, setGoal] = useState("");
  const [investment, setInvestment] = useState("");
  const [risk, setRisk] = useState("");

  const handleSubmit = () => {
    if (!goal || !investment || !risk) {
      alert("Please fill all fields.");
      return;
    }

    onGenerate({
      goal,
      investment,
      risk,
    });
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

      <h2 className="text-3xl font-bold text-white mb-2">
        AI Risk Assessment
      </h2>

      <p className="text-slate-400 mb-8">
        Discover your investment personality in less than a minute.
      </p>

      <div className="space-y-6">

        <div>
          <label className="text-white block mb-2">
            Investment Goal
          </label>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-3 text-white"
          >
            <option value="">Select Goal</option>
            <option>Wealth Creation</option>
            <option>Retirement</option>
            <option>Education</option>
          </select>
        </div>

        <div>
          <label className="text-white block mb-2">
            Monthly Investment
          </label>

          <select
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-3 text-white"
          >
            <option value="">Select Amount</option>
            <option>₹1,000</option>
            <option>₹5,000</option>
            <option>₹10,000</option>
            <option>₹20,000+</option>
          </select>
        </div>

        <div>
          <label className="text-white block mb-2">
            Risk Preference
          </label>

          <select
            value={risk}
            onChange={(e) => setRisk(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-3 text-white"
          >
            <option value="">Select Risk</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
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