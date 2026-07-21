

import {
  FaRobot,
  FaGraduationCap,
  FaFire,
  FaChartLine,
  FaBullseye,
  FaCheckCircle,
} from "react-icons/fa";

function WelcomeBanner() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-slate-950 border border-slate-700 p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl overflow-hidden">

      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10 items-center">

        <div>
          <p className="text-indigo-300 font-semibold text-sm sm:text-base">
            👋 Welcome to FinStart
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Welcome Back, Harshita!
          </h1>

          <p className="mt-6 text-slate-300 text-base sm:text-lg leading-8 max-w-2xl">
            Continue learning investing, practice with paper trading,
            and let your AI Buddy guide you toward smarter financial decisions.
          </p>

          <div className="mt-8 max-w-xl">
            <div className="flex justify-between text-sm text-slate-300 mb-2">
              <span>Learning Progress</span>
              <span>62%</span>
            </div>

            <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">
              <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            </div>

            <p className="text-slate-400 mt-3">
              12 / 20 Lessons Completed
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto flex justify-center items-center gap-2 bg-white text-indigo-700 hover:bg-slate-100 transition px-6 py-3 rounded-xl font-semibold">
              <FaRobot />
              Ask AI Buddy
            </button>

            <button className="w-full sm:w-auto flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-xl text-white font-semibold">
              <FaGraduationCap />
              Continue Learning
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          {[
            {title:"Growth",value:"+18.7%",icon:<FaChartLine className="text-green-400 text-3xl mb-5"/>},
            {title:"Learning",value:"72%",icon:<FaCheckCircle className="text-cyan-400 text-3xl mb-5"/>},
            {title:"Risk Score",value:"Medium",icon:<FaBullseye className="text-yellow-400 text-3xl mb-5"/>},
          ].map((card)=>(
            <div key={card.title} className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-5">
              {card.icon}
              <p className="text-slate-300">{card.title}</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mt-2">{card.value}</h2>
            </div>
          ))}

        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mt-12">

        <Stat icon={<FaCheckCircle className="text-cyan-400 text-3xl"/>} title="Lessons Completed" value="12"/>
        <Stat icon={<FaFire className="text-orange-400 text-3xl"/>} title="Learning Streak" value="15 Days"/>
        <Stat icon={<FaChartLine className="text-green-400 text-3xl"/>} title="Paper Trades" value="24"/>
        <Stat icon={<FaBullseye className="text-pink-400 text-3xl"/>} title="Daily Goal" value="2 / 3"/>

      </div>

      <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-indigo-500/40 bg-indigo-600/10 backdrop-blur-md p-6 lg:p-8">

          <div className="flex items-center gap-3">
            <FaRobot className="text-indigo-400 text-3xl"/>
            <h3 className="text-white text-xl lg:text-2xl font-bold">
              AI Buddy Recommendation
            </h3>
          </div>

          <p className="text-slate-300 mt-5 leading-8">
            Complete <span className="text-indigo-400 font-semibold">Stock Market Basics</span> today to unlock Paper Trading and earn <span className="text-yellow-400 font-semibold">+100 XP</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <button className="w-full sm:w-auto flex justify-center items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 py-3 text-white font-semibold">
              <FaGraduationCap/> Continue Learning
            </button>

            <button className="w-full sm:w-auto flex justify-center items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-6 py-3 text-white font-semibold">
              <FaRobot/> Chat with AI
            </button>

          </div>

        </div>

        <div className="rounded-3xl bg-slate-800 border border-slate-700 p-6 lg:p-8">

          <h3 className="text-white text-xl lg:text-2xl font-bold">
            📈 Today's Market
          </h3>

          <div className="mt-6 space-y-5">
            <Row name="NIFTY 50" value="+0.82%"/>
            <Row name="SENSEX" value="+0.74%"/>
            <div className="flex justify-between">
              <span className="text-slate-400">Market Sentiment</span>
              <span className="font-bold text-green-400">🟢 Bullish</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

function Stat({icon,title,value}){
  return(
    <div className="bg-slate-800 hover:bg-slate-700 transition rounded-2xl p-5 border border-slate-700">
      {icon}
      <p className="text-slate-400 text-sm mt-4">{title}</p>
      <h2 className="text-2xl lg:text-3xl font-bold text-white mt-2">{value}</h2>
    </div>
  )
}

function Row({name,value}){
  return(
    <div className="flex justify-between items-center border-b border-slate-700 pb-3">
      <span className="text-slate-400">{name}</span>
      <span className="font-bold text-green-400">{value}</span>
    </div>
  )
}

export default WelcomeBanner;
