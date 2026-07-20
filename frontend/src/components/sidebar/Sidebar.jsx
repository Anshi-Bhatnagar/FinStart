import {
  FaHome,
  FaRobot,
  FaGraduationCap,
  FaChartLine,
  FaShieldAlt,
  FaWallet,
  FaTrophy,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  const menu = [
    { icon: <FaHome />, title: "Dashboard" },
    { icon: <FaRobot />, title: "AI Buddy" },
    { icon: <FaGraduationCap />, title: "Learn" },
    { icon: <FaChartLine />, title: "Market" },
    { icon: <FaWallet />, title: "Paper Trading" },
    { icon: <FaShieldAlt />, title: "Scan Shield" },
    { icon: <FaTrophy />, title: "Achievements" },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-950 text-white flex flex-col justify-between border-r border-slate-800">

      {/* Logo */}

      <div>

        <div className="px-8 py-8">

          <h1 className="text-3xl font-extrabold text-indigo-400 tracking-wide">
            FinStart
          </h1>

          <p className="text-slate-400 text-sm mt-2">
            Learn • Invest • Grow
          </p>

        </div>

        {/* Menu */}

        <nav className="mt-6">

          {menu.map((item) => (
            <button
              key={item.title}
              className="group w-full flex items-center gap-4 px-8 py-4 text-slate-300 hover:bg-indigo-600/20 hover:text-indigo-400 transition-all duration-300"
            >
              <span className="text-lg">{item.icon}</span>

              <span className="font-medium">
                {item.title}
              </span>
            </button>
          ))}

        </nav>

      </div>

      {/* Bottom Card */}

      <div className="p-6">

        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 p-5">

          <p className="text-xs uppercase tracking-widest opacity-70">
            Premium
          </p>

          <h2 className="font-bold text-xl mt-2">
            Unlock Pro Learning
          </h2>

          <p className="text-sm mt-3 opacity-90">
            Personalized AI mentorship,
            advanced market simulations
            and exclusive finance courses.
          </p>

          <button className="mt-5 w-full rounded-xl bg-white text-indigo-700 py-3 font-semibold hover:scale-105 transition">
            Upgrade
          </button>

        </div>

        {/* Settings */}

        <button className="mt-6 flex items-center gap-3 text-slate-400 hover:text-white transition">

          <FaCog />

          Settings

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;