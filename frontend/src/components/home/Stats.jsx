import {
  FaUsers,
  FaBookOpen,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers className="text-4xl text-violet-400" />,
      number: "5K+",
      title: "Active Learners",
      description:
        "Students and beginners learning investing with FinStart.",
    },
    {
      icon: <FaBookOpen className="text-4xl text-green-400" />,
      number: "100+",
      title: "Learning Modules",
      description:
        "Easy-to-understand finance lessons for every beginner.",
    },
    {
      icon: <FaRobot className="text-4xl text-blue-400" />,
      number: "24×7",
      title: "AI Assistance",
      description:
        "Instant answers to your finance and investment questions.",
    },
    {
      icon: <FaChartLine className="text-4xl text-yellow-400" />,
      number: "95%",
      title: "Learning Success",
      description:
        "Users feel more confident about investing after learning.",
    },
  ];

  return (
    <section className="bg-slate-950 py-28 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Why Thousands Choose
          <span className="text-violet-500"> FinStart</span>
        </h2>

        <p className="text-center text-slate-400 mt-5 max-w-3xl mx-auto">
          FinStart combines AI, financial education and investment tools
          into one beginner-friendly platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-violet-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-white mt-6">
                {item.number}
              </h3>

              <h4 className="text-xl font-semibold text-white mt-4">
                {item.title}
              </h4>

              <p className="text-slate-400 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;