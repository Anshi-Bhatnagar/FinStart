import {
  FaUserPlus,
  FaClipboardCheck,
  FaGraduationCap,
  FaChartLine,
  FaBullseye,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus className="text-4xl text-violet-400" />,
      title: "Create Account",
      description:
        "Sign up and create your FinStart profile in just a few clicks.",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-blue-400" />,
      title: "Take Risk Assessment",
      description:
        "Answer a few questions to discover your investment personality.",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-green-400" />,
      title: "Learn Finance",
      description:
        "Explore beginner-friendly lessons and improve your financial knowledge.",
    },
    {
      icon: <FaChartLine className="text-4xl text-yellow-400" />,
      title: "Start Investing",
      description:
        "Track your portfolio, mutual funds and SIPs from one dashboard.",
    },
    {
      icon: <FaBullseye className="text-4xl text-pink-400" />,
      title: "Achieve Your Goals",
      description:
        "Build long-term wealth with AI-powered guidance and smart investing habits.",
    },
  ];

  return (
    <section
      id="how"
      className="bg-slate-900 text-white py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          How
          <span className="text-violet-500"> FinStart </span>
          Works
        </h2>

        <p className="text-slate-400 text-center mt-5 max-w-3xl mx-auto">
          Your journey from beginner to confident investor in five simple steps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-20">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-slate-950 border border-slate-800 rounded-3xl p-8 text-center hover:border-violet-500 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div className="mt-6 flex justify-center">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mt-6">
                {step.title}
              </h3>

              <p className="text-slate-400 mt-4 text-sm leading-6">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;