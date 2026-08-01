import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    try {

        setLoading(true);

        const formData = new URLSearchParams();

        formData.append("username", email);
        formData.append("password", password);

        const res = await axios.post(
            "http://127.0.0.1:8000/auth/login",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        localStorage.setItem("token", res.data.access_token);

        alert("Login Successful!");

        navigate("/dashboard");

    } catch (err) {

        if (err.response) {

            setError(err.response.data.detail);

        } else {

            setError("Server not reachable");

        }

    } finally {

        setLoading(false);

    }

};

    return (

        <div className="min-h-screen bg-[#0B1120] flex items-center justify-center p-8">

            <div className="w-full max-w-6xl rounded-3xl overflow-hidden bg-[#131A2A] shadow-2xl grid lg:grid-cols-2">

                {/* LEFT */}

                <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-900">

                    <div>

                        <div className="flex items-center gap-3 mb-12">

                            <HiOutlineChartBar size={35} />

                            <h1 className="text-3xl font-bold">

                                FinStart

                            </h1>

                        </div>

                        <h2 className="text-5xl font-bold leading-tight">

                            Invest Smarter.

                            <br />

                            Learn Faster.

                        </h2>

                        <p className="mt-6 text-lg text-violet-100">

                            Practice investing, track goals and grow wealth
                            with AI guidance.

                        </p>

                    </div>

                    <div className="space-y-5 text-lg">

                        <div>✅ Paper Trading</div>

                        <div>✅ AI Financial Buddy</div>

                        <div>✅ Goal Tracking</div>

                        <div>✅ Investment Learning</div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="p-12">

                    <h2 className="text-4xl font-bold text-white">

                        Welcome Back 👋

                    </h2>

                    <p className="text-gray-400 mt-2">

                        Login to continue your financial journey.

                    </p>

                    <form
                        onSubmit={handleLogin}
                        className="mt-10 space-y-6"
                    >

                        <div>

                            <label className="text-gray-300">

                                Email

                            </label>

                            <input

                                type="email"

                                value={email}

                                onChange={(e)=>setEmail(e.target.value)}

                                placeholder="Enter email"

                                className="w-full mt-2 rounded-xl bg-[#1A2235] border border-gray-700 p-4 text-white outline-none focus:border-violet-500"

                            />

                        </div>

                        <div className="relative">

                            <label className="text-gray-300">

                                Password

                            </label>

                            <input

                                type={showPassword ? "text" : "password"}

                                value={password}

                                onChange={(e)=>setPassword(e.target.value)}

                                placeholder="Enter password"

                                className="w-full mt-2 rounded-xl bg-[#1A2235] border border-gray-700 p-4 text-white outline-none focus:border-violet-500"

                            />

                            <button

                                type="button"

                                onClick={()=>setShowPassword(!showPassword)}

                                className="absolute right-5 top-14 text-gray-400"

                            >

                                {

                                    showPassword

                                        ?

                                        <FaEyeSlash/>

                                        :

                                        <FaEye/>

                                }

                            </button>

                        </div>

                        <div className="flex justify-between text-sm">

                            <label className="flex items-center gap-2 text-gray-400">

                                <input type="checkbox"/>

                                Remember me

                            </label>

                            <button
                                type="button"
                                className="text-violet-400 hover:text-violet-300"
                            >

                                Forgot Password?

                            </button>

                        </div>

                        {

                            error &&

                            <div className="text-red-500">

                                {error}

                            </div>

                        }

                        <button

                            className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 transition p-4 font-semibold"

                        >

                            {

                                loading

                                    ?

                                    "Logging in..."

                                    :

                                    "Login"

                            }

                        </button>

                        <div className="flex items-center gap-4">

                            <hr className="flex-1 border-gray-700"/>

                            <span className="text-gray-500">

                                OR

                            </span>

                            <hr className="flex-1 border-gray-700"/>

                        </div>

                        <button

                            type="button"

                            className="w-full border border-gray-700 rounded-xl p-4 flex justify-center items-center gap-3 hover:bg-[#1A2235] transition"

                        >

                            <FcGoogle size={24}/>

                            Continue with Google

                        </button>

                        <p className="text-center text-gray-400">

                            Don't have an account?

                            <span className="text-violet-400 cursor-pointer ml-2">

                                Sign Up

                            </span>

                        </p>

                    </form>

                </div>

            </div>

        </div>

    );

}