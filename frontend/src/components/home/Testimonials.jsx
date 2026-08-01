import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "College Student",
      review:
        "FinStart made investing so easy to understand. The AI Buddy answered all my beginner questions and helped me build confidence.",
    },
    {
      name: "Priya Verma",
      role: "First-Time Investor",
      review:
        "The Risk Assessment gave me a clear investment strategy. I finally know where to begin with mutual funds and SIPs.",
    },
    {
      name: "Rohan Mehta",
      role: "Working Professional",
      review:
        "The bite-sized lessons and portfolio tracking are amazing. Everything I need is available in one place.",
    },
  ];

  return (
    <section className="bg-slate-900 py-28 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          What Our
          <span className="text-violet-500"> Users Say</span>
        </h2>

        <p className="text-center text-slate-400 mt-5 max-w-3xl mx-auto">
          Thousands of learners are building financial confidence with
          FinStart.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((user) => (
            <div
              key={user.name}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-violet-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex gap-1 text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-slate-300 leading-7 italic">
                "{user.review}"
              </p>

              <div className="mt-8">
                <h4 className="text-white font-bold text-lg">
                  {user.name}
                </h4>

                <p className="text-slate-400 text-sm">
                  {user.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;