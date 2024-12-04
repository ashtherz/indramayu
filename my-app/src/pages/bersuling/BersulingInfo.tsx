import React from "react";
import placeholderImage from "../../images/placeholder.svg";

const BersulingInfo: React.FC = () => {
  return (
    <div>
      {/* Information Section with Smaller Width Card */}
      <div className="bg-[#f7fbff] p-6 mt-6 rounded-md shadow mx-auto max-w-[1400px]">
        <p className="text-lg leading-relaxed">
          BERSU–LING (Berjama’ah Subuh Keliling) adalah program sholat subuh
          berjamaah keliling yang diadakan di tingkat kecamatan. Program ini
          dirancang untuk mempererat hubungan antara pemerintah atau pemangku
          kepentingan dengan masyarakat pedesaan. Selain menjadi ajang untuk
          berkomunikasi langsung, program ini juga bertujuan untuk mendengarkan
          suara, keluhan, serta masukan dari masyarakat setempat.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Kegiatan BERSU–LING dilaksanakan di masjid-masjid besar kecamatan dan
          masjid jami di tingkat desa, dengan harapan dapat meningkatkan
          partisipasi masyarakat dalam pelaksanaan ibadah subuh secara berjamaah
          sekaligus memperkuat kebersamaan dalam komunitas.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="mt-12">
        <h2 className="text-[#01347c] text-xl font-bold text-center">Galeri</h2>
        <div className="mt-2 border-t-2 border-[#01347c] w-16 mx-auto"></div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {/* Placeholder Images */}
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

export default BersulingInfo;
