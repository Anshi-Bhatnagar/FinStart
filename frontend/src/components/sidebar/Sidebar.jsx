import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaRobot,
  FaBookOpen,
  FaChartLine,
  FaCoins,
  FaShieldAlt,
  FaTrophy,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "AI Buddy",
      path: "/ai-buddy",
      icon: <FaRobot />,
    },
    {
      name: "Learn",
      path: "/learn",
      icon: <FaBookOpen />,
    },
    {
      name: "Market",
      path: "/market",
      icon: <FaChartLine />,
    },
    {
      name: "Paper Trading",
      path: "/paper-trading",
      icon: <FaCoins />,
    },
    {
      name: "Risk Assessment",
      path: "/risk-assessment",
      icon: <FaShieldAlt />,
    },
    {
      name: "Achievements",
      path: "/achievements",
      icon: <FaTrophy />,
    },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen p-6">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-purple-500">
          FinStart
        </h1>
        <p className="text-slate-400 text-sm">
          Financial Learning Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition duration-200 ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;