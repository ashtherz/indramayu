import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import KruwcilInfo from "./KruwcilInfo";
import KruwcilInput from "./KruwcilInput";
import KruwcilDetail from "./KruwcilDetail";
import KruwcilGrafik from "./KruwcilGrafik";
import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";

const KruwcilPage: React.FC = () => {
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
            KRUW-CIL (Kredit Usaha Warung Kecil)
          </h1>

          {/* Tabs */}
          <div className="flex mt-6 space-x-4">
            <Link
              to="/kruwcil/informasi"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/kruwcil/informasi")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Informasi
            </Link>
            <Link
              to="/kruwcil/input"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/kruwcil/input")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Input
            </Link>
            <Link
              to="/kruwcil/detail"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/kruwcil/detail")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Detail
            </Link>
            <Link
              to="/kruwcil/grafik"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/kruwcil/grafik")
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
              <Route path="informasi" element={<KruwcilInfo />} />
              <Route path="input" element={<KruwcilInput />} />
              <Route path="detail" element={<KruwcilDetail />} />
              <Route path="grafik" element={<KruwcilGrafik />} />
            </Routes>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default KruwcilPage;
