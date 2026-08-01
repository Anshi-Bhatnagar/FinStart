import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);

    // Later connect backend here
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center text-violet-500">
          FinStart
        </h1>

        <p className="text-slate-400 text-center mt-3">
          Create your account
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <div>
            <label className="text-white block mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullname"
              value={user.fullname}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500"
              required
            />
          </div>

          <div>
            <label className="text-white block mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500"
              required
            />
          </div>

          <div>
            <label className="text-white block mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-500 transition py-3 rounded-xl text-white font-semibold"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-violet-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;