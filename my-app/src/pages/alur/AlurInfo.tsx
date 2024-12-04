import React from "react";
import placeholderImage from "../../images/placeholder.svg";

const AlurInfo: React.FC = () => {
  return (
    <div>
      {/* Information Section */}
      <div className="bg-[#f7fbff] p-6 mt-6 rounded-md shadow mx-auto max-w-[1400px]">
      <p className="text-lg leading-relaxed">
        A-LUR (Alun Alun Rakyat) adalah program yang bertujuan untuk
        mengembalikan fungsi Alun-Alun Pendopo Kantor Bupati Indramayu sebagai
        ikon dan simbol kedekatan antara pemimpin dan rakyat. Program ini
        dilakukan dengan membongkar seluruh pagar yang mengelilingi alun-alun,
        sehingga ruang publik tersebut dapat diakses lebih mudah oleh
        masyarakat dan menjadi tempat berkumpulnya berbagai aktivitas sosial.
      </p>
      <p className="mt-4 text-lg leading-relaxed">
        Inisiatif ini diharapkan dapat menciptakan ruang terbuka yang lebih
        inklusif, mempererat hubungan antara pemerintah dan masyarakat, serta
        meningkatkan partisipasi publik dalam berbagai kegiatan yang diadakan di
        sekitar alun-alun.
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

export default AlurInfo;
