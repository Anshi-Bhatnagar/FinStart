import {
  FaRobot,
  FaBookOpen,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-violet-400" />,
      title: "AI Financial Buddy",
      description:
        "Ask questions about investing, budgeting, mutual funds and receive AI-powered guidance instantly.",
    },
    {
      icon: <FaBookOpen className="text-4xl text-green-400" />,
      title: "Interactive Learning",
      description:
        "Master finance with beginner-friendly lessons, quizzes and practical examples.",
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-400" />,
      title: "Investment Tracker",
      description:
        "Track your portfolio, SIPs and mutual funds with an intuitive dashboard.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-400" />,
      title: "Risk Assessment",
      description:
        "Understand your investor personality and receive a personalized investment strategy.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-slate-950 text-white py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Why Choose
          <span className="text-violet-500"> FinStart?</span>
        </h2>

        <p className="text-slate-400 text-center mt-5 max-w-3xl mx-auto">
          Everything a beginner needs to confidently start their
          investment journey in one platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
            >
              {feature.icon}

              <h3 className="text-2xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;