import {
  FaBell,
  FaSearch,
  FaCoins,
  FaFire,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 px-8 flex items-center justify-between">

      {/* Left */}

      <div className="flex items-center gap-5">

        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <div className="relative">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

          <input
            type="text"
            placeholder="Search stocks, SIP, Mutual Funds..."
            className="bg-slate-800 text-white rounded-xl pl-12 pr-5 py-3 w-96 outline-none border border-slate-700 focus:border-indigo-500"
          />

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Streak */}

        <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl">

          <FaFire className="text-orange-400" />

          <span className="text-white font-semibold">
            15 Day Streak
          </span>

        </div>

        {/* Coins */}

        <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl">

          <FaCoins className="text-yellow-400" />

          <span className="text-white font-semibold">
            ₹1,250 Coins
          </span>

        </div>

        {/* Notification */}

        <button className="relative bg-slate-800 p-3 rounded-xl hover:bg-indigo-600 transition">

          <FaBell className="text-white text-lg" />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 bg-slate-800 px-3 py-2 rounded-xl cursor-pointer">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="profile"
            className="w-11 h-11 rounded-full"
          />

          <div>

            <h2 className="text-white font-semibold">
              Harshita
            </h2>

            <p className="text-xs text-slate-400">
              Investor Level 3
            </p>

          </div>

          <FaChevronDown className="text-slate-400" />

        </div>

      </div>

    </header>
  );
}

export default Navbar;