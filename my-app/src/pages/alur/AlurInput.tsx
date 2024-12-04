import React from "react";

const AlurInput: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[700px]">
        <h3 className="text-[#01347c] text-lg font-bold mb-4 text-center">
          Silahkan Lengkapi Form Berikut!
        </h3>
        <form className="space-y-4">
          {/* Tanggal Laporan */}
          <div>
            <label
              htmlFor="tanggal-laporan"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Laporan <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="tanggal-laporan"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
            />
          </div>

          {/* Cerita Transformasi */}
          <div>
            <label
              htmlFor="cerita-transformasi"
              className="block text-sm font-medium text-gray-700"
            >
              Cerita Transformasi <span className="text-red-500">*</span>
            </label>
            <textarea
              id="cerita-transformasi"
              rows={4}
              placeholder="Tulis Cerita Transformasi"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
            />
          </div>

          {/* Unggah Foto */}
          <div>
            <label
              htmlFor="unggah-foto"
              className="block text-sm font-medium text-gray-700"
            >
              Unggah Foto <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <div className="w-16 h-16 bg-gray-100 border border-gray-300 flex items-center justify-center rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm8 5a2 2 0 11-4 0 2 2 0 014 0zm-3 4a5.978 5.978 0 00-4.148 1.771c.389.314.874.479 1.378.479h9.54c.503 0 .989-.165 1.378-.479A5.978 5.978 0 0011 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="unggah-foto"
                  className="hidden"
                  accept="image/*"
                />
                <label
                  htmlFor="unggah-foto"
                  className="block px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50"
                >
                  Choose File
                </label>
                <span className="text-sm text-gray-500 block mt-1">
                  Unggah foto sebelum dan sesudah transformasi, maksimal 10MB
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#01347c] text-white font-medium rounded-md shadow-sm hover:bg-[#012f6b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01347c]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AlurInput;
