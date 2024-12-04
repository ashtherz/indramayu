import React, { useState } from "react";

const LadaDetail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    { no: 1, kategori: "Tanah", tahun: 2024, nilai: "Rp 100.000.000", objek: "", keterangan: "", sertifikat: 20 },
    { no: 2, kategori: "Kendaraan", tahun: 2024, nilai: "Rp 350.000.000", objek: 1, keterangan: "", sertifikat: "" },
    { no: 3, kategori: "Tanah", tahun: 2023, nilai: "Rp 75.000.000", objek: "", keterangan: "", sertifikat: 15 },
    { no: 4, kategori: "Tanah", tahun: 2023, nilai: "Rp 150.000.000", objek: "", keterangan: "", sertifikat: 30 },
    { no: 5, kategori: "Tanah", tahun: 2022, nilai: "Rp 100.000.000", objek: "", keterangan: "", sertifikat: 20 },
    { no: 6, kategori: "Kendaraan", tahun: 2022, nilai: "Rp 450.000.000", objek: 1, keterangan: "", sertifikat: "" },
    { no: 7, kategori: "Kendaraan", tahun: 2021, nilai: "Rp 750.000.000", objek: 2, keterangan: "", sertifikat: "" },
    { no: 8, kategori: "Kendaraan", tahun: 2021, nilai: "Rp 650.000.000", objek: 2, keterangan: "", sertifikat: "" },
    { no: 9, kategori: "Tanah", tahun: 2020, nilai: "Rp 100.000.000", objek: "", keterangan: "", sertifikat: 20 },
    { no: 10, kategori: "Tanah", tahun: 2020, nilai: "Rp 125.000.000", objek: "", keterangan: "", sertifikat: 25 },
  ];

  const filteredData = data.filter(
    (row) =>
      row.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.tahun.toString().includes(searchTerm) ||
      row.nilai.toLowerCase().includes(searchTerm)
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="flex flex-col items-center justify-start p-6 bg-gray-50">
      {/* Search and Rows Per Page */}
      <div className="flex justify-between items-center w-full max-w-7xl mb-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-80 focus:outline-none focus:ring focus:ring-[#01347c] focus:border-[#01347c]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="rowsPerPage" className="text-sm">
            Showing
          </label>
          <select
            id="rowsPerPage"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-[#01347c] focus:border-[#01347c]"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page
            }}
          >
            {[5, 10, 15, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="flex justify-center w-full max-w-7xl">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full divide-y divide-gray-200 border mx-auto text-center">
            <thead className="bg-[#01347c]">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">No</th>
                <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">Kategori</th>
                <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">Tahun</th>
                <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">Nilai</th>
                <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">Jumlah Objek</th>
                <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">Keterangan</th>
                <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">Jumlah Sertifikat</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.map((row) => (
                <tr key={row.no}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.no}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.kategori}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.tahun}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.nilai}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.objek}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.keterangan}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.sertifikat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 w-full max-w-7xl">
        <span className="text-sm text-gray-600">
          Showing {paginatedData.length} of {filteredData.length} entries
        </span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#01347c] text-white hover:bg-[#012f6b]"
            }`}
          >
            Previous
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#01347c] text-white hover:bg-[#012f6b]"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LadaDetail;