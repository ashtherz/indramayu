import React from "react";

const DekatInput: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[700px]">
        <h3 className="text-[#01347c] text-lg font-bold mb-4 text-center">
          Silahkan Lengkapi Form Berikut!
        </h3>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="tahun"
              className="block text-sm font-medium text-gray-700"
            >
              Tahun <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="tahun"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="jumlah-pju"
              className="block text-sm font-medium text-gray-700"
            >
              Jumlah Pemasangan PJU <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="jumlah-pju"
              placeholder="Tulis Jumlah Pemasangan PJU"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
            />
          </div>
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

export default DekatInput;