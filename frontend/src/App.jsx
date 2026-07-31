import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Investment from "./pages/Investment";

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/investments" element={<Investment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;