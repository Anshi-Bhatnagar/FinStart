import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import RiskAssessment from "./pages/RiskAssessment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/risk-assessment" element={<RiskAssessment />} />
    </Routes>
  );
}

export default App;