import { FaArrowRight } from "react-icons/fa";

function ContinueLearning() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-purple-500 transition-all duration-300">

      <h2 className="text-2xl font-bold text-white mb-6">
        Continue Learning
      </h2>

      {/* Course Card */}
      <div className="bg-slate-800 rounded-2xl overflow-hidden">

        {/* Image */}
       <div className="h-52 overflow-hidden">

  <img
    src="/images.png"
    alt="Stock Market Basics"
    className="w-full h-full object-cover"
  />

</div>

        <div className="p-5">

          <p className="text-purple-400 text-sm font-semibold">
            Beginner Course
          </p>

          <h3 className="text-white text-xl font-bold mt-2">
            Stock Market Basics
          </h3>

          <p className="text-slate-400 mt-3">
            Learn how the stock market works,
            understand shares, exchanges and investing.
          </p>

          {/* Progress */}
          <div className="mt-6">

            <div className="flex justify-between text-sm text-slate-300 mb-2">

              <span>Progress</span>

              <span>70%</span>

            </div>

            <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

              <div className="h-full w-[70%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>

            </div>

          </div>

          <button className="mt-7 w-full bg-purple-600 hover:bg-purple-500 transition rounded-xl py-3 text-white font-semibold flex justify-center items-center gap-2">

            Continue

            <FaArrowRight />

          </button>

        </div>

      </div>

    </div>
  );
}

export default ContinueLearning;