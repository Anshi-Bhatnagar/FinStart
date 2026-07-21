import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import RiskAssessment from "./pages/RiskAssessment";
import Learn from "./pages/Learn";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/risk-assessment" element={<RiskAssessment />} />
      <Route path="/learn" element={<Learn />} />
    </Routes>
  );
}

export default App;