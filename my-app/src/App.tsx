import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import IcetaPage from "./pages/iceta/IcetaPage";
import LedigPage from "./pages/ledig/LedigPage";
import BersulingPage from "./pages/bersuling/BersulingPage";
import LadaPage from "./pages/LadaPage";
import DekatPage from "./pages/DekatPage";
import DokmaruPage from "./pages/DokmaruPage";
import KruwcilPage from "./pages/KruwcilPage";
import JaketPage from "./pages/JaketPage";
import PeriPage from "./pages/PeriPage";
import AlurPage from "./pages/AlurPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/iceta/*" element={<IcetaPage />} />
        <Route path="/ledig/*" element={<LedigPage />} />
        <Route path="/bersuling/*" element={<BersulingPage />} />
        <Route path="/lada" element={<LadaPage />} />
        <Route path="/dekat" element={<DekatPage />} />
        <Route path="/dokmaru" element={<DokmaruPage />} />
        <Route path="/kruwcil" element={<KruwcilPage />} />
        <Route path="/jaket" element={<JaketPage />} />
        <Route path="/peri" element={<PeriPage />} />
        <Route path="/alur" element={<AlurPage />} />
      </Routes>
    </Router>
  );
};

export default App;
