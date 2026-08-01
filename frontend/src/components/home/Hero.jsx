import { Link } from "react-router-dom";
import { FaRobot, FaChartLine, FaGraduationCap } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-block px-4 py-2 rounded-full bg-violet-900/40 text-violet-300 border border-violet-700 mb-6">
            🚀 AI-Powered Financial Learning
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Learn.
            <span className="text-violet-500"> Invest.</span>
            <br />
            Grow Your Wealth.
          </h1>

          <p className="text-slate-400 text-lg mt-8 leading-8 max-w-xl">
            FinStart helps beginners understand investing through AI-powered
            guidance, risk assessment, bite-sized lessons, and portfolio
            tracking—all in one place.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/login"
              className="bg-violet-600 hover:bg-violet-500 px-7 py-4 rounded-xl font-semibold transition"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="border border-violet-500 px-7 py-4 rounded-xl hover:bg-violet-600 transition"
            >
              Learn More
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="grid gap-6">

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-lg">
              <div className="flex items-center gap-4">
                <FaRobot className="text-violet-500 text-3xl" />

                <div>
                  <h3 className="text-xl font-bold">
                    AI Financial Buddy
                  </h3>

                  <p className="text-slate-400">
                    Get personalized investment guidance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-lg">
              <div className="flex items-center gap-4">
                <FaChartLine className="text-green-400 text-3xl" />

                <div>
                  <h3 className="text-xl font-bold">
                    Smart Investments
                  </h3>

                  <p className="text-slate-400">
                    Track SIPs, Mutual Funds & Portfolio.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-lg">
              <div className="flex items-center gap-4">
                <FaGraduationCap className="text-yellow-400 text-3xl" />

                <div>
                  <h3 className="text-xl font-bold">
                    Interactive Learning
                  </h3>

                  <p className="text-slate-400">
                    Learn finance in simple bite-sized lessons.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;