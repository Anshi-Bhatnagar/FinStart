import {
  FaRobot,
  FaGraduationCap,
  FaFire,
  FaStar,
  FaArrowTrendUp,
  FaCircleCheck,
} from "react-icons/fa6";

function WelcomeBanner() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-8 shadow-xl">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

        <div>

          <p className="text-indigo-400 font-medium">
            👋 Good Evening
          </p>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mt-2">
            Welcome back, Harshita!
          </h1>

          <p className="text-slate-400 mt-3 max-w-2xl">
            You're making excellent progress on your financial journey.
            Complete today's lesson and continue growing your investment skills.
          </p>

        </div>

        <div className="bg-indigo-600 rounded-2xl px-6 py-4 text-center">

          <p className="text-indigo-200 text-sm">
            Current Level
          </p>

          <h2 className="text-3xl font-bold text-white">
            3
          </h2>

        </div>

      </div>

      {/* Quick Stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

        <div className="bg-slate-800 rounded-2xl p-5">

          <FaCircleCheck className="text-cyan-400 text-3xl"/>

          <p className="text-slate-400 mt-3">
            Courses
          </p>

          <h2 className="text-2xl font-bold text-white">
            12 Completed
          </h2>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5">

          <FaFire className="text-orange-400 text-3xl"/>

          <p className="text-slate-400 mt-3">
            Learning Streak
          </p>

          <h2 className="text-2xl font-bold text-white">
            15 Days
          </h2>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5">

          <FaStar className="text-yellow-400 text-3xl"/>

          <p className="text-slate-400 mt-3">
            XP Earned
          </p>

          <h2 className="text-2xl font-bold text-white">
            1250 XP
          </h2>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5">

          <FaArrowTrendUp className="text-green-400 text-3xl"/>

          <p className="text-slate-400 mt-3">
            Quiz Accuracy
          </p>

          <h2 className="text-2xl font-bold text-green-400">
            87%
          </h2>

        </div>

      </div>

      {/* AI Suggestion */}

      <div className="mt-8 bg-indigo-600/15 border border-indigo-500 rounded-2xl p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

        <div>

          <div className="flex items-center gap-3">

            <FaRobot className="text-indigo-400 text-2xl"/>

            <h3 className="text-white text-xl font-bold">
              AI Buddy Recommendation
            </h3>

          </div>

          <p className="text-slate-300 mt-3 max-w-3xl">
            Complete <span className="text-indigo-400 font-semibold">"Stock Market Basics"</span>
            today to unlock Paper Trading and earn
            <span className="text-yellow-400 font-semibold"> +100 XP</span>.
          </p>

        </div>

        <div className="flex gap-4">

          <button className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-3 rounded-xl text-white font-semibold flex items-center gap-2">

            <FaGraduationCap />

            Continue

          </button>

          <button className="bg-slate-800 hover:bg-slate-700 transition px-5 py-3 rounded-xl text-white font-semibold flex items-center gap-2">

            <FaRobot />

            Ask AI

          </button>

        </div>

      </div>

    </section>
  );
}

export default WelcomeBanner;