import Layout from "../components/layout/Layout";
import WelcomeBanner from "../components/welcomebanner";
import ProgressCard from "../components/progresscard/ProgressCard";
import AIBuddy from "../components/aibuddy/AIBuddy";
import PaperTradingCard from "../components/paperTrading/PaperTradingCard";

function Dashboard() {
  return (
    <Layout>

      <WelcomeBanner />

      <div className="grid lg:grid-cols-2 gap-8">
        <ProgressCard />
        <AIBuddy />
      </div>

      {/* Add it HERE */}
      <div className="mt-8">
        <PaperTradingCard />
      </div>

    </Layout>
  );
}

export default Dashboard;