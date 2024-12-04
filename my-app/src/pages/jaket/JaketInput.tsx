import React from "react";

const JaketInput: React.FC = () => {
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
            <div className="mt-1">
              <select
                id="tahun"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              >
                <option value="" disabled selected>
                  Pilih Tahun
                </option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="jenis"
              className="block text-sm font-medium text-gray-700"
            >
              Jenis Paket <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <select
                id="jenis"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              >
                <option value="" disabled selected>
                  Pilih Jenis Paket
                </option>
                <option value="Paket A">Paket A</option>
                <option value="Paket B">Paket B</option>
                <option value="Paket C">Paket C</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="jumlah"
              className="block text-sm font-medium text-gray-700"
            >
              Jumlah Peserta <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="jumlah"
                placeholder="Tulis Jumlah Peserta"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#01347c] text-white font-medium rounded-md shadow-sm hover:bg-[#012f6b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01347c]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JaketInput;
