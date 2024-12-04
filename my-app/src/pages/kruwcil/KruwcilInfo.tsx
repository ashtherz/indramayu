import React from "react";
import placeholderImage from "../../images/placeholder.svg";

const KruwcilInfo: React.FC = () => {
  return (
    <div>
      <div className="bg-[#f7fbff] p-6 mt-6 rounded-md shadow mx-auto max-w-[1400px]">
        <p className="text-lg leading-relaxed">
          KRUW-CIL (Kredit Usaha Warung Kecil) adalah program kredit yang
          dirancang untuk mendukung pengembangan warung kecil dan UMKM,
          sekaligus mendorong pertumbuhan perekonomian wong cilik. Melalui kerja
          sama dengan Bank Perkreditan Rakyat Daerah, program ini menawarkan
          pinjaman dengan nilai mulai dari Rp500.000 (lima ratus ribu rupiah)
          hingga Rp5.000.000 (lima juta rupiah), memberikan akses pendanaan bagi
          pelaku usaha kecil untuk meningkatkan keberlanjutan dan produktivitas
          usahanya.
        </p>
      </div>

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

export default KruwcilInfo;
