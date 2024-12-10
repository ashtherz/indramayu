import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundGif from "../images/404.gif";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <img 
        src={notFoundGif} 
        alt="404 Not Found" 
        className="max-w-[500px] w-full h-auto mb-8"
      />
      
      <h1 className="text-[#01347c] text-4xl font-bold mb-4">
        Halaman Tidak Ditemukan
      </h1>
      
      <p className="text-gray-600 text-lg mb-8 text-center">
        Maaf, halaman yang Anda cari tidak dapat ditemukan.
      </p>
      
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-[#01347c] text-white rounded-lg font-medium 
                 hover:bg-[#012c6b] transition-colors duration-300
                 focus:outline-none focus:ring-2 focus:ring-[#01347c] focus:ring-opacity-50"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default NotFoundPage;