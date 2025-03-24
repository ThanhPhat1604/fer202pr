import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeekerPage from "./pages/SeekerPage";
import CompanyPage from "./pages/CompanyPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/seeker-profile" element={<SeekerPage />} />
        <Route path="/company-profile" element={<CompanyPage />} />
      </Routes>
    </Router>
  );
}
