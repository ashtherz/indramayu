import React from "react";
import placeholderImage from "../../images/placeholder.svg";

const IcetaInfo: React.FC = () => {
  return (
    <div>
      {/* Information Section with Smaller Width Card */}
      <div className="bg-[#f7fbff] p-6 mt-6 rounded-md shadow mx-auto max-w-[1400px]">
        <p className="text-lg leading-relaxed">
          I–CETA (Indramayu Cepat Tanggap) adalah program unggulan Pemerintah
          Kabupaten Indramayu untuk memberikan pelayanan kepada masyarakat atas
          pengaduan, keluhan, atau permohonan informasi kepada perangkat daerah di
          lingkungan Pemerintah Kabupaten Indramayu.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Warga dapat melapor melalui:
          <ul className="list-disc ml-6 mt-2">
            <li>Call center</li>
            <li>WhatsApp</li>
            <li>Media sosial (Facebook, Instagram, & Twitter)</li>
            <li>Aplikasi pengaduan (SP4N LAPOR! & Indramayu1)</li>
            <li>Datang langsung ke kantor terkait</li>
            <li>Kotak pos pengaduan</li>
          </ul>
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

export default IcetaInfo;
