import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import PeriInfo from "./PeriInfo";
import PeriInput from "./PeriInput";
import PeriDetail from "./PeriDetail";
import PeriGrafik from "./PeriGrafik";
import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";

const PeriPage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar onLogout={() => (window.location.href = "/")} />

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          <h1 className="text-[#01347c] text-2xl font-bold">
            PE-RI (Perempuan Berdikari)
          </h1>

          {/* Tabs */}
          <div className="flex mt-6 space-x-4">
            <Link
              to="/peri/informasi"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/peri/informasi")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Informasi
            </Link>
            <Link
              to="/peri/input"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/peri/input")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Input
            </Link>
            <Link
              to="/peri/detail"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/peri/detail")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Detail
            </Link>
            <Link
              to="/peri/grafik"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/peri/grafik")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Grafik
            </Link>
          </div>

          {/* Tab Content */}
          <div className="bg-[#f7fbff] p-6 mt-6 rounded-md shadow">
            <Routes>
              <Route path="/" element={<Navigate to="informasi" replace />} />
              <Route path="informasi" element={<PeriInfo />} />
              <Route path="input" element={<PeriInput />} />
              <Route path="detail" element={<PeriDetail />} />
              <Route path="grafik" element={<PeriGrafik />} />
            </Routes>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PeriPage;
