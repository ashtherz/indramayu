import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import Informasi from "./IcetaInfo";
import Input from "./IcetaInput";
import Detail from "./IcetaDetail";
import Grafik from "./IcetaGrafik";
import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";

const IcetaPage: React.FC = () => {
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
            I–CETA (Indramayu Cepat Tanggap)
          </h1>

          {/* Tabs */}
          <div className="flex mt-6 space-x-4">
            <Link
              to="/iceta/informasi"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/iceta/informasi")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Informasi
            </Link>
            <Link
              to="/iceta/input"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/iceta/input")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Input
            </Link>
            <Link
              to="/iceta/detail"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/iceta/detail")
                  ? "bg-[#01347c] text-white"
                  : "text-[#01347c] border border-gray-300 hover:bg-[#01347c] hover:text-white transition-colors"
              }`}
            >
              Detail
            </Link>
            <Link
              to="/iceta/grafik"
              className={`px-6 py-3 rounded-lg text-base font-semibold ${
                location.pathname.includes("/iceta/grafik")
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
              {/* Redirect to "Informasi" tab if no specific tab is provided */}
              <Route path="/" element={<Navigate to="informasi" replace />} />
              <Route path="informasi" element={<Informasi />} />
              <Route path="input" element={<Input />} />
              <Route path="detail" element={<Detail />} />
              <Route path="grafik" element={<Grafik />} />
            </Routes>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IcetaPage;
