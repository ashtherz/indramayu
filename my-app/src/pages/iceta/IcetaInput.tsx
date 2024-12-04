import React from "react";

const IcetaInput: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#f7fbff] p-6 rounded-md shadow">
        <h2 className="text-[#01347c] text-xl font-bold">
          Silahkan Lengkapi Form Berikut!
        </h2>
        <form className="space-y-6 mt-6">
          {/* Tanggal Aduan */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Tanggal Aduan <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="mt-1 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-[#01347c] focus:ring-[#01347c] sm:text-sm"
              placeholder="Pilih Tanggal Aduan"
            />
          </div>

          {/* Kategori Aduan */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Kategori Aduan <span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-[#01347c] focus:ring-[#01347c] sm:text-sm"
            >
              <option value="">Pilih Kategori Aduan</option>
              <option value="kategori1">Kategori 1</option>
              <option value="kategori2">Kategori 2</option>
              <option value="kategori3">Kategori 3</option>
            </select>
          </div>

          {/* Instansi Penanggung Jawab */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Instansi Penanggung Jawab <span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-[#01347c] focus:ring-[#01347c] sm:text-sm"
            >
              <option value="">Pilih Instansi Penanggung Jawab</option>
              <option value="instansi1">Instansi 1</option>
              <option value="instansi2">Instansi 2</option>
              <option value="instansi3">Instansi 3</option>
            </select>
          </div>

          {/* Lokasi Aduan */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Lokasi Aduan <span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-[#01347c] focus:ring-[#01347c] sm:text-sm"
            >
              <option value="">Pilih Lokasi Aduan</option>
              <option value="lokasi1">Lokasi 1</option>
              <option value="lokasi2">Lokasi 2</option>
              <option value="lokasi3">Lokasi 3</option>
            </select>
          </div>

          {/* Jumlah Aduan */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Jumlah Aduan <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="mt-1 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-[#01347c] focus:ring-[#01347c] sm:text-sm"
              placeholder="Tulis Jumlah Aduan"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-[#01347c] text-white px-4 py-2 rounded-md hover:bg-[#012f6b]"
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
