import React from "react";

const IcetaInput: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[700px]">
        <h3 className="text-[#01347c] text-lg font-bold mb-4 text-center">
          Silahkan Lengkapi Form Berikut!
        </h3>
        <form className="space-y-4">
          {/* Tanggal Aduan */}
          <div>
            <label
              htmlFor="tanggal"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Aduan <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="tanggal"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              placeholder="Pilih Tanggal Aduan"
              required
            />
          </div>

          {/* Kategori Aduan */}
          <div>
            <label
              htmlFor="kategori"
              className="block text-sm font-medium text-gray-700"
            >
              Kategori Aduan <span className="text-red-500">*</span>
            </label>
            <select
              id="kategori"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              required
            >
              <option value="">Pilih Kategori Aduan</option>
              <option value="kategori1">Kategori 1</option>
              <option value="kategori2">Kategori 2</option>
              <option value="kategori3">Kategori 3</option>
            </select>
          </div>

          {/* Instansi Penanggung Jawab */}
          <div>
            <label
              htmlFor="instansi"
              className="block text-sm font-medium text-gray-700"
            >
              Instansi Penanggung Jawab <span className="text-red-500">*</span>
            </label>
            <select
              id="instansi"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              required
            >
              <option value="">Pilih Instansi Penanggung Jawab</option>
              <option value="instansi1">Instansi 1</option>
              <option value="instansi2">Instansi 2</option>
              <option value="instansi3">Instansi 3</option>
            </select>
          </div>

          {/* Lokasi Aduan */}
          <div>
            <label
              htmlFor="lokasi"
              className="block text-sm font-medium text-gray-700"
            >
              Lokasi Aduan <span className="text-red-500">*</span>
            </label>
            <select
              id="lokasi"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              required
            >
              <option value="">Pilih Lokasi Aduan</option>
              <option value="lokasi1">Lokasi 1</option>
              <option value="lokasi2">Lokasi 2</option>
              <option value="lokasi3">Lokasi 3</option>
            </select>
          </div>

          {/* Jumlah Aduan */}
          <div>
            <label
              htmlFor="jumlah"
              className="block text-sm font-medium text-gray-700"
            >
              Jumlah Aduan <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="jumlah"
              placeholder="Tulis Jumlah Aduan"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              min="0"
              required
            />
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

export default IcetaInput;
