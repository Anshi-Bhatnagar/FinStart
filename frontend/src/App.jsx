import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Investment from "./pages/Investment";
import RiskAssessment from "./pages/RiskAssessment";
import Learn from "./pages/Learn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/investments" element={<Investment />} />
        <Route path="/risk-assessment" element={<RiskAssessment />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;