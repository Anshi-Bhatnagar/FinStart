import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="bg-slate-900 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-violet-500">
              FinStart
            </h2>

            <p className="text-slate-400 mt-5 leading-7">
              Empowering beginners with AI-powered financial education,
              smart investment tools, and personalized risk assessment.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#" className="hover:text-violet-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-violet-400 transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how"
                  className="hover:text-violet-400 transition"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-violet-400 transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-white font-semibold text-xl mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-violet-400 cursor-pointer transition">
                Privacy Policy
              </li>

              <li className="hover:text-violet-400 cursor-pointer transition">
                Terms & Conditions
              </li>

              <li className="hover:text-violet-400 cursor-pointer transition">
                FAQs
              </li>

              <li className="hover:text-violet-400 cursor-pointer transition">
                Support
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white font-semibold text-xl mb-5">
              Connect With Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3 text-slate-400">
                <FaEnvelope className="text-violet-400" />
                <span>support@finstart.com</span>
              </div>

              <div className="flex gap-5 mt-5">

                <a
                  href="#"
                  className="text-2xl text-slate-400 hover:text-violet-400 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="text-2xl text-slate-400 hover:text-violet-400 transition"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-center">
            © 2026 FinStart. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-violet-600 hover:bg-violet-500 transition p-3 rounded-full"
          >
            <FaArrowUp className="text-white" />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;