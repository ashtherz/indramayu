import React from "react";
import placeholderImage from "../../images/placeholder.svg";

const DokmaruInfo: React.FC = () => {
  return (
    <div>
      {/* Information Section */}
      <div className="bg-[#f7fbff] p-6 mt-6 rounded-md shadow mx-auto max-w-[1400px]">
        <p className="text-lg leading-relaxed">
          DOK-MARU (Dokter Masuk Rumah) adalah program layanan kesehatan inovatif
          yang menghadirkan pelayanan langsung ke rumah warga. Program unggulan ini
          menjadi solusi bagi masyarakat, terutama yang tidak mampu, untuk mendapatkan
          akses kesehatan.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Pemerintah Kabupaten Indramayu bergerak cepat dengan melibatkan dokter,
          perawat, bidan desa, dan petugas kesehatan lainnya untuk mendatangi langsung
          kediaman pasien.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="mt-12">
        <h2 className="text-[#01347c] text-xl font-bold text-center">Galeri</h2>
        <div className="mt-2 border-t-2 border-[#01347c] w-16 mx-auto"></div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <img
            src={placeholderImage}
            alt="Gallery Placeholder"
            className="rounded-md shadow"
          />
          <img
            src={placeholderImage}
            alt="Gallery Placeholder"
            className="rounded-md shadow"
          />
          <img
            src={placeholderImage}
            alt="Gallery Placeholder"
            className="rounded-md shadow"
          />
          <img
            src={placeholderImage}
            alt="Gallery Placeholder"
            className="rounded-md shadow"
          />
          <img
            src={placeholderImage}
            alt="Gallery Placeholder"
            className="rounded-md shadow"
          />
          <img
            src={placeholderImage}
            alt="Gallery Placeholder"
            className="rounded-md shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default DokmaruInfo;
