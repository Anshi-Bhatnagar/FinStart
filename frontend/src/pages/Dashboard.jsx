import Layout from "../components/layout/Layout";

import WelcomeBanner from "../components/welcomebanner/WelcomeBanner";
import AIBuddy from "../components/aibuddy/AIBuddy";
import PaperTrading from "../components/papertrading/PaperTrading";
import ProgressCard from "../components/progresscard/ProgressCard";

function Dashboard() {
  return (
    <Layout>

      <WelcomeBanner />

      <div className="grid lg:grid-cols-2 gap-8">
        <ProgressCard />
        <AIBuddy />
      </div>

      <PaperTrading />

    </Layout>
  );
}

export default Dashboard;