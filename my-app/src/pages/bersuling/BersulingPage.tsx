import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import BersulingInfo from "./BersulingInfo"; 
import BersulingInput from "./BersulingInput"; 
import BersulingDetail from "./BersulingDetail";
import BersulingGrafik from "./BersulingGrafik";
import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";

const BersulingPage: React.FC = () => {
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
            BERSU–LING (Bersih dan Sehat Lingkungan)
          </h1>

          {/* Tabs */}
          <div className="flex mt-6 space-x-4">
            <Link
              to="/bersuling/informasi"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/bersuling/informasi")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Informasi
            </Link>
            <Link
              to="/bersuling/input"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/bersuling/input")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Input
            </Link>
            <Link
              to="/bersuling/detail"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/bersuling/detail")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Detail
            </Link>
            <Link
              to="/bersuling/grafik"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/bersuling/grafik")
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
              <Route path="informasi" element={<BersulingInfo />} />
              <Route path="input" element={<BersulingInput />} />
              <Route path="detail" element={<BersulingDetail />} />
              <Route path="grafik" element={<BersulingGrafik />} />
            </Routes>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BersulingPage;
