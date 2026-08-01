import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Investment from "./pages/Investment";
import PaperTrading from "./pages/PaperTrading";
import RiskAssessment from "./pages/RiskAssessment";
import Learn from "./pages/Learn";
import AIBuddyPage from "./pages/AIBuddyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/investments" element={<Investment />} />
    
        <Route
          path="/paper-trading"
          element={<PaperTrading />}
        />

        <Route
          path="/risk-assessment"
          element={<RiskAssessment />}
        />

        <Route
          path="/learn"
          element={<Learn />}
        />

        <Route
          path="/ai-buddy"
          element={<AIBuddyPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;