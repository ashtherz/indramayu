import React from "react";

const LadaInput: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[700px]">
        <h3 className="text-[#01347c] text-lg font-bold mb-4 text-center">
          Silahkan Lengkapi Form Berikut!
        </h3>
        <form className="space-y-4">
          {/* Kategori Input */}
          <div>
            <label
              htmlFor="kategori"
              className="block text-sm font-medium text-gray-700"
            >
              Kategori <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <select
                id="kategori"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              >
                <option value="" disabled selected>
                  Pilih Kategori
                </option>
                <option value="Tanah">Tanah</option>
                <option value="Kendaraan">Kendaraan</option>
                <option value="Bangunan">Bangunan</option>
              </select>
            </div>
          </div>

          {/* Tahun Input */}
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
                {Array.from({ length: 50 }, (_, i) => 2000 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Nilai Input */}
          <div>
            <label
              htmlFor="nilai"
              className="block text-sm font-medium text-gray-700"
            >
              Nilai <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="nilai"
                placeholder="Tulis Nilai Sertifikasi"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              />
            </div>
          </div>

          {/* Jumlah Objek Input */}
          <div>
            <label
              htmlFor="jumlahObjek"
              className="block text-sm font-medium text-gray-700"
            >
              Jumlah Objek <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="jumlahObjek"
                placeholder="Tulis Jumlah Objek"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              />
            </div>
          </div>

          {/* Keterangan Input */}
          <div>
            <label
              htmlFor="keterangan"
              className="block text-sm font-medium text-gray-700"
            >
              Keterangan <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="keterangan"
                placeholder="Tulis Keterangan"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              />
            </div>
          </div>

          {/* Jumlah Sertifikat Input */}
          <div>
            <label
              htmlFor="jumlahSertifikat"
              className="block text-sm font-medium text-gray-700"
            >
              Jumlah Sertifikat <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="jumlahSertifikat"
                placeholder="Tulis Jumlah Sertifikat"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
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

export default LadaInput;
