import { FaBookOpen, FaAward } from "react-icons/fa";

function ProgressOverview() {
  return (
    <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-purple-700 via-indigo-700 to-indigo-800 shadow-xl">

      <div className="grid lg:grid-cols-3 gap-6 items-center p-8">

        {/* Left */}
        <div className="lg:col-span-2">

          <p className="text-purple-200 font-semibold">
            Overall Progress
          </p>

          <div className="flex items-end gap-2 mt-3">

            <h1 className="text-6xl font-bold text-white">
              72%
            </h1>

            <span className="text-white/80 text-xl mb-2">
              Completed
            </span>

          </div>

          {/* Progress */}

          <div className="mt-8">

            <div className="h-4 rounded-full bg-white/20 overflow-hidden">

              <div className="h-full w-[72%] rounded-full bg-emerald-400"></div>

            </div>

            <p className="text-white/80 mt-4">
              Keep going! You're doing great.
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col items-center">

          <img
            src="/img.png"
            alt="Finance"
            className="w-44 mb-6"
          />

          <div className="grid grid-cols-2 gap-5 w-full">

            <div className="text-center">

              <FaBookOpen className="mx-auto text-2xl text-white mb-2"/>

              <h2 className="text-3xl font-bold text-white">
                18
              </h2>

              <p className="text-white/70 text-sm">
                Lessons
              </p>

            </div>

            <div className="text-center">

              <FaAward className="mx-auto text-2xl text-yellow-300 mb-2"/>

              <h2 className="text-3xl font-bold text-white">
                9
              </h2>

              <p className="text-white/70 text-sm">
                Certificates
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProgressOverview;