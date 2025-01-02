import React, { useState } from "react";

const LeDigInputForm: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    tanggal: "",
    program: "",
    jumlah: ""
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form data:', formData); // Debug log

    try {
        const response = await fetch('http://localhost:5001/api/ledig', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: formData.tanggal,
                program: formData.program,
                quantity: parseInt(formData.jumlah)
            })
        });

        console.log('Response status:', response.status); // Debug log

        const data = await response.json();
        console.log('Response data:', data); // Debug log

        if (response.ok) {
            alert('Data berhasil disimpan!');
            setFormData({
                tanggal: "",
                program: "",
                jumlah: ""
            });
        } else {
            throw new Error(data.error || 'Failed to submit data');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Gagal menyimpan data. Silakan coba lagi.');
    }
};

  return (
    <div className="flex justify-center items-center py-12 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[700px]">
        <h3 className="text-[#01347c] text-lg font-bold mb-4 text-center">
          Silahkan Lengkapi Form Berikut!
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Tanggal Aduan */}
          <div>
            <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
              Tanggal Aduan <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              required
            />
          </div>

          {/* Program LE-DIG Input */}
          <div>
            <label htmlFor="program" className="block text-sm font-medium text-gray-700">
              Program LE-DIG <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <select
                id="program"
                value={formData.program}
                onChange={handleChange}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
                required
              >
                <option value="" disabled>Pilih Program LE-DIG</option>
                <option value="Internet Desa">Internet Desa</option>
                <option value="Aplikasi Wajib Desa">Aplikasi Wajib Desa</option>
                <option value="Anjungan Desa Mandiri">Anjungan Desa Mandiri</option>
                <option value="Aplikasi Layanan Desa">Aplikasi Layanan Desa</option>
                <option value="Website Desa">Website Desa</option>
                <option value="Kawasan Desa Digital">Kawasan Desa Digital</option>
                <option value="Aplikasi Indramayu.id">Aplikasi Indramayu.id</option>
                <option value="Padi Box">Padi Box</option>
                <option value="AyuTVCC">AyuTVCC</option>
              </select>
            </div>
          </div>

          {/* Jumlah Implementasi Input */}
          <div>
            <label htmlFor="jumlah" className="block text-sm font-medium text-gray-700">
              Jumlah Implementasi <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="jumlah"
                value={formData.jumlah}
                onChange={handleChange}
                placeholder="Tulis Jumlah Implementasi"
                min="0"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
                required
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

export default LeDigInputForm;