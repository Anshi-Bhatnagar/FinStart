import {
  FaArrowUp,
  FaRobot,
  FaGraduationCap,
  FaWallet,
} from "react-icons/fa";

function WelcomeBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-700 to-slate-900 p-10 shadow-xl">

      {/* Background Glow */}

      <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>

      <div className="absolute left-20 bottom-0 h-40 w-40 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>

      <div className="relative z-10 flex justify-between items-center">

        {/* Left */}

        <div>

          <p className="text-indigo-200 text-lg">
            Welcome Back 👋
          </p>

          <h1 className="text-5xl font-extrabold text-white mt-3 leading-tight">
            Ready to build
            <br />
            your financial future?
          </h1>

          <p className="text-slate-200 mt-5 max-w-xl leading-7">
            Continue learning, practice investing with paper trading,
            analyze risks, and get instant guidance from your AI Financial Buddy.
          </p>

          <div className="flex gap-5 mt-8">

            <button className="flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-indigo-700 hover:scale-105 transition">

              <FaRobot />

              Ask AI Buddy

            </button>

            <button className="flex items-center gap-3 rounded-xl border border-white px-6 py-4 text-white hover:bg-white hover:text-indigo-700 transition">

              <FaGraduationCap />

              Continue Learning

            </button>

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 text-center">

            <FaWallet className="mx-auto text-3xl text-green-400" />

            <p className="mt-4 text-slate-300">
              Portfolio
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              ₹1,20,000
            </h2>

          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 text-center">

            <FaArrowUp className="mx-auto text-3xl text-emerald-400" />

            <p className="mt-4 text-slate-300">
              Growth
            </p>

            <h2 className="text-3xl font-bold text-green-400 mt-2">
              +18.7%
            </h2>

          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 text-center">

            <p className="text-slate-300">
              Learning
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              72%
            </h2>

            <div className="mt-4 h-2 rounded-full bg-slate-700">

              <div className="h-2 w-[72%] rounded-full bg-green-400"></div>

            </div>

          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 text-center">

            <p className="text-slate-300">
              Risk Score
            </p>

            <h2 className="text-3xl font-bold text-yellow-300 mt-2">
              Medium
            </h2>

            <div className="mt-4 h-2 rounded-full bg-slate-700">

              <div className="h-2 w-[55%] rounded-full bg-yellow-400"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WelcomeBanner;