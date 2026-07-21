import { FaFire, FaTrophy, FaMedal, FaArrowRight } from "react-icons/fa";

function LearningWidgets() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

      {/* Learning Streak */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-orange-500 transition">

        <div className="flex items-center gap-3">
          <FaFire className="text-orange-400 text-3xl" />
          <h2 className="text-2xl font-bold text-white">
            Learning Streak
          </h2>
        </div>

        <h1 className="text-6xl font-bold text-white mt-8">
          15
        </h1>

        <p className="text-orange-400 font-semibold text-lg">
          Days
        </p>

        <p className="text-slate-400 mt-4">
          You're on fire! Complete today's lesson to keep your streak alive.
        </p>

        <button className="mt-8 w-full bg-orange-500 hover:bg-orange-400 transition rounded-xl py-3 text-white font-semibold">
          Continue Streak
        </button>

      </div>

      {/* Achievements */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

        <div className="flex items-center gap-3 mb-6">
          <FaTrophy className="text-yellow-400 text-3xl" />
          <h2 className="text-2xl font-bold text-white">
            Achievements
          </h2>
        </div>

        <div className="space-y-5">

          <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-3">

              <FaMedal className="text-yellow-400 text-2xl"/>

              <div>

                <h3 className="text-white font-semibold">
                  Beginner Investor
                </h3>

                <p className="text-slate-400 text-sm">
                  Completed first course
                </p>

              </div>

            </div>

          </div>

          <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-3">

              <FaMedal className="text-purple-400 text-2xl"/>

              <div>

                <h3 className="text-white font-semibold">
                  Paper Trader
                </h3>

                <p className="text-slate-400 text-sm">
                  Completed 20 trades
                </p>

              </div>

            </div>

          </div>

          <button className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-300">

            View All

            <FaArrowRight />

          </button>

        </div>

      </div>

    </div>
  );
}

export default LearningWidgets;