import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import WelcomeBanner from "../components/welcomebanner/WelcomeBanner";
import AIBuddy from "../components/aibuddy/AIBuddy";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="p-8 space-y-8 overflow-y-auto">

          <WelcomeBanner />

          <AIBuddy />

        </main>

      </div>

    </div>
  );
}

export default Dashboard;