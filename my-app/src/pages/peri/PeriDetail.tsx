import React, { useState } from "react";

const PeriDetail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    { no: 1, tahun: 2024, jumlah: 479 },
    { no: 2, tahun: 2023, jumlah: 365 },
    { no: 3, tahun: 2022, jumlah: 600 },
    { no: 4, tahun: 2021, jumlah: 400 },
    { no: 5, tahun: 2020, jumlah: 250 },
    { no: 6, tahun: 2019, jumlah: 175 },
    { no: 7, tahun: 2018, jumlah: 465 },
    { no: 8, tahun: 2017, jumlah: 375 },
    { no: 9, tahun: 2016, jumlah: 350 },
    { no: 10, tahun: 2015, jumlah: 250 },
  ];

  const filteredData = data.filter((row) =>
    row.tahun.toString().includes(searchTerm)
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

      {/* Table */}
      <div className="overflow-x-auto w-full max-w-7xl">
        <table className="min-w-full divide-y divide-gray-200 border mx-auto text-center">
          <thead className="bg-[#01347c]">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                Tahun
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                Jumlah PMI Dilatih
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((row) => (
              <tr key={row.no}>
                <td className="px-6 py-4">{row.no}</td>
                <td className="px-6 py-4">{row.tahun}</td>
                <td className="px-6 py-4">{row.jumlah}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 w-full max-w-7xl">
        <span className="text-sm text-gray-600">
          Showing {paginatedData.length} of {filteredData.length} entries
        </span>
        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#01347c] text-white hover:bg-[#012f6b]"
            }`}
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
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

export default PeriDetail;
