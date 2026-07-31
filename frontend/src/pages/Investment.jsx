import { useState } from "react";
import PortfolioTab from "../components/investment/PortfolioTab";
import MutualFundsTab from "../components/investment/MutualFundsTab";
import SipTab from "../components/investment/SipTab";



function Investment() {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-8">

      <div className="mb-10">

    <h1 className="text-4xl font-bold text-white">

        Investments

    </h1>

    <p className="text-gray-400 mt-3">

        Track your portfolio, discover mutual funds, and manage your SIPs in one place.

    </p>

</div>

      <div className="inline-flex bg-[#131A2A] p-2 rounded-2xl mb-10">

    {["portfolio","mutual","sip"].map((tab)=>(
        <button
            key={tab}
            onClick={()=>setActiveTab(tab)}
            className={`px-8 py-3 rounded-xl capitalize transition-all duration-300 ${
                activeTab===tab
                ? "bg-violet-600 text-white shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
        >
            {tab==="mutual" ? "Mutual Funds" : tab.toUpperCase()}
        </button>
    ))}

</div>

      {activeTab === "portfolio" && <PortfolioTab />}
      {activeTab === "mutual" && <MutualFundsTab />}
      {activeTab === "sip" && <SipTab />}

    </div>
  );
}

export default Investment;