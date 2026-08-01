import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-violet-500">
            FinStart
          </h1>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#features"
            className="text-slate-300 hover:text-violet-400 transition"
          >
            Features
          </a>

          <a
            href="#how"
            className="text-slate-300 hover:text-violet-400 transition"
          >
            How it Works
          </a>

          <a
            href="#about"
            className="text-slate-300 hover:text-violet-400 transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-slate-300 hover:text-violet-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 border border-violet-500 rounded-xl text-violet-400 hover:bg-violet-500 hover:text-white transition"
          >
            Login
          </Link>

          <Link
  to="/signup"
  className="px-5 py-2 bg-violet-600 hover:bg-violet-500 rounded-xl text-white transition"
>
  Sign Up
</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;