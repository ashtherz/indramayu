import React from "react";
import placeholderImage from "../../images/placeholder.svg";

const DekatInfo: React.FC = () => {
  return (
    <div>
      {/* Information Section */}
      <div className="bg-[#f7fbff] p-6 mt-6 rounded-md shadow mx-auto max-w-[1400px]">
        <p className="text-lg leading-relaxed">
          DE-KAT (Desa Kabeh Terang) adalah program inisiatif strategis untuk
          meningkatkan keamanan dan kenyamanan masyarakat di desa. Program ini
          bertujuan mengurangi angka kriminalitas dan kecelakaan dengan
          membangun 1.000 (seribu) titik penerangan jalan umum (PJU) di berbagai
          wilayah tingkat desa.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Dengan adanya penerangan yang memadai, aktivitas warga di malam hari
          diharapkan menjadi lebih aman, sekaligus mendukung mobilitas
          masyarakat serta kegiatan ekonomi di pedesaan.
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

export default DekatInfo;
