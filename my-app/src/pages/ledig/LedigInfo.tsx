import React from "react";
import placeholderImage from "../../images/placeholder.svg";

const LedigInfo: React.FC = () => {
  return (
    <div>
      {/* Information Section with Smaller Width Card */}
      <div className="bg-[#f7fbff] p-6 mt-6 rounded-md shadow mx-auto max-w-[1400px]">
        <p className="text-lg leading-relaxed">
          Le-Dig (Lebu Digital) adalah sebuah program yang bertujuan untuk
          mewujudkan smart village atau desa cerdas. Program ini melibatkan
          pemasangan wi-fi di setiap balai desa, yang kemudian diintegrasikan
          dengan program I-CETA. Le-Dig dirancang sebagai ekosistem desa digital
          berbasis satelit untuk mendigitalisasi desa-desa yang tidak memiliki
          akses internet terestrial.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Program ini merupakan salah satu bentuk implementasi sistem
          pemerintahan berbasis industri 4.0, yang bertujuan untuk mendorong
          kemajuan desa dan meningkatkan kualitas hidup masyarakat. Dengan
          Le-Dig, pemerintah berharap dapat menciptakan masyarakat yang lebih
          berdaya, berpengetahuan, dan bermartabat melalui pemanfaatan teknologi
          digital secara inklusif.
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

export default LedigInfo;
