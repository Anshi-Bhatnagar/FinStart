import {
  FaFire,
  FaStar,
  FaTrophy,
  FaBullseye,
  FaArrowTrendUp,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import api from "../../services/axiosInstance";

function ProgressCard() {
  const [achievementData, setAchievementData] = useState(null);
  const [streak, setStreak] = useState(null);
  const [progress, setProgress] = useState(null);
  

  useEffect(() => {
  const fetchAchievements = async () => {
    try {
      const res = await api.get("/achievements/");
      setAchievementData(res.data);
    } catch (err) {
      console.error("Error fetching achievements:", err);
    }
  };
  const fetchStreak = async () => {
  try {
    const res = await api.get("/streak/");
    setStreak(res.data);
  } catch (err) {
    console.error("Error fetching streak:", err);
  }
};
const fetchProgress = async () => {
  try {
    const res = await api.get("/progress/");
    setProgress(res.data);
  } catch (err) {
    console.error("Error fetching progress:", err);
  }
};


  fetchAchievements();
  fetchStreak();
  fetchProgress();  
  
}, []);

  return (
    <section className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-xl">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Your Progress
          </h2>

          <p className="text-slate-400 mt-1">
            Track your financial learning journey
          </p>

        </div>

        <div className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold">
          Level 3
        </div>

      </div>

      {/* Overall Progress */}

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span className="text-white font-semibold">
            Overall Completion
          </span>

          <span className="text-indigo-400 font-bold">
            {progress ? `${progress.completion_percentage}%` : "Loading..."}
          </span>

        </div>

        <div className="h-4 bg-slate-800 rounded-full overflow-hidden">

          <div
  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
  style={{
    width: `${progress?.completion_percentage ?? 0}%`,
  }}
></div>

        </div>

      </div>

      {/* Learning Modules */}

      <div className="mt-10 space-y-6">

        {[
          {
            title: "Budgeting Basics",
            progress: "100%",
            width: "100%",
          },
          {
            title: "Mutual Funds",
            progress: "85%",
            width: "85%",
          },
          {
            title: "Stock Market",
            progress: "60%",
            width: "60%",
          },
          {
            title: "Tax Planning",
            progress: "35%",
            width: "35%",
          },
        ].map((item) => (

          <div key={item.title}>

            <div className="flex justify-between mb-2">

              <span className="text-slate-300">
                {item.title}
              </span>

              <span className="text-indigo-400 font-semibold">
                {item.progress}
              </span>

            </div>

            <div className="h-3 bg-slate-800 rounded-full overflow-hidden">

              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                style={{ width: item.width }}
              ></div>

            </div>

          </div>

        ))}

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-5 mt-10">

        <div className="bg-slate-800 rounded-2xl p-5 text-center">

          <FaFire className="mx-auto text-3xl text-orange-400"/>

          <h2 className="text-white text-3xl font-bold mt-3">
              {streak?.current_streak ?? 0}
          </h2>

          <p className="text-slate-400 mt-2">
            Day Streak
          </p>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5 text-center">

          <FaStar className="mx-auto text-3xl text-yellow-400"/>

          <h2 className="text-white text-3xl font-bold mt-3">
            {achievementData?.xp ?? 0}
          </h2>

          <p className="text-slate-400 mt-2">
            XP Earned
          </p>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5 text-center">

          <FaTrophy className="mx-auto text-3xl text-green-400"/>

          <h2 className="text-white text-3xl font-bold mt-3">
            {achievementData?.badges ?? 0}
          </h2>

          <p className="text-slate-400 mt-2">
            Badges
          </p>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5 text-center">

          <FaBullseye className="mx-auto text-3xl text-indigo-400"/>

          <h2 className="text-white text-3xl font-bold mt-3">
            87%
          </h2>

          <p className="text-slate-400 mt-2">
            Quiz Accuracy
          </p>

        </div>

      </div>

      {/* Motivation */}

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 flex justify-between items-center">

        <div>

          <h3 className="text-white text-xl font-bold">
            You're almost there 🚀
          </h3>

          <p className="text-indigo-100 mt-2">
            Complete the Stock Market module to unlock
            Advanced Investing.
          </p>

        </div>

        <FaArrowTrendUp className="text-white text-5xl"/>

      </div>

    </section>
  );
}

export default ProgressCard;