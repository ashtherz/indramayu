import React, { useState } from "react";

const KruwcilDetail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    { no: 1, tahun: 2024, jumlah: 365, nilai: "Rp 1.150.000.000" },
    { no: 2, tahun: 2023, jumlah: 400, nilai: "Rp 1.250.000.000" },
    { no: 3, tahun: 2022, jumlah: 450, nilai: "Rp 1.450.000.000" },
    { no: 4, tahun: 2021, jumlah: 245, nilai: "Rp 950.000.000" },
    { no: 5, tahun: 2020, jumlah: 350, nilai: "Rp 1.100.000.000" },
  ];

  const filteredData = data.filter(
    (row) =>
      row.tahun.toString().includes(searchTerm) ||
      row.nilai.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="flex flex-col items-center justify-start p-6 bg-gray-50">
      <div className="flex justify-between items-center w-full max-w-7xl mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md px-4 py-2 text-sm w-80 focus:outline-none focus:ring focus:ring-[#01347c] focus:border-[#01347c]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-[#01347c] focus:border-[#01347c]"
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
        >
          {[5, 10, 15, 20].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto w-full max-w-7xl">
        <table className="min-w-full divide-y divide-gray-200 border mx-auto text-center">
          <thead className="bg-[#01347c]">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-white uppercase">
                No
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-white uppercase">
                Tahun
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-white uppercase">
                Jumlah
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-white uppercase">
                Nilai
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((row) => (
              <tr key={row.no}>
                <td className="px-6 py-4">{row.no}</td>
                <td className="px-6 py-4">{row.tahun}</td>
                <td className="px-6 py-4">{row.jumlah}</td>
                <td className="px-6 py-4">{row.nilai}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4 w-full max-w-7xl">
        <span className="text-sm text-gray-600">
          Showing {paginatedData.length} of {filteredData.length} entries
        </span>
        <div>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default KruwcilDetail;
