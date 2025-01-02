import React, { useState, useEffect } from "react";

const LeDigDetail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/ledig");
        if (!response.ok) {
          throw new Error("Failed to fetch LE-DIG data");
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(
    (row: any) =>
      row.progLedig.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.date.toString().includes(searchTerm)
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
                <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                  No
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                  Program LE-DIG
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                  Jumlah Implementasi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.map((row: any, index: number) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {index + 1 + (currentPage - 1) * rowsPerPage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.progLedig}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.totalImplementation}
                  </td>
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

export default LeDigDetail;
