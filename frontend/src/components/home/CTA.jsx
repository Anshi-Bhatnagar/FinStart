import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-slate-950 py-28 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 rounded-[40px] p-14 text-center shadow-2xl">

          <h2 className="text-5xl font-bold text-white">
            Ready to Start Your
            <br />
            Financial Journey?
          </h2>

          <p className="text-violet-100 mt-6 text-lg max-w-3xl mx-auto leading-8">
            Join FinStart today and learn investing with AI guidance,
            personalized risk assessment, interactive lessons, and smart
            investment tracking.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

            <Link
              to="/signup"
              className="bg-white text-violet-700 font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition duration-300"
            >
              🚀 Get Started
            </Link>

            <Link
              to="/login"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-violet-700 transition duration-300"
            >
              Login
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;