import React from "react";
import placeholderImage from "../../images/placeholder.svg";

const JaketInfo: React.FC = () => {
  return (
    <div>
      <div className="bg-[#f7fbff] p-6 mt-6 rounded-md shadow mx-auto max-w-[1400px]">
        <p className="text-lg leading-relaxed">
          JA-KET (Kejar Paket) adalah program pemerintah yang menyediakan
          pendidikan secara gratis melalui kelompok belajar untuk Paket A, B,
          dan C. Program ini bertujuan untuk memberikan akses pendidikan yang
          merata kepada seluruh lapisan masyarakat, sehingga mereka dapat
          memperoleh pengetahuan yang setara dengan jenjang pendidikan formal.
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
        </div>
      </div>
    </div>
  );
};

export default JaketInfo;
