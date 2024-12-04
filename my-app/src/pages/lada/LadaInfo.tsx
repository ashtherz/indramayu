import React from "react";
import placeholderImage from "../../images/placeholder.svg";

const LadaInfo: React.FC = () => {
  return (
    <div>
      {/* Information Section */}
      <div className="bg-[#f7fbff] p-6 mt-6 rounded-md shadow mx-auto max-w-[1400px]">
        <p className="text-lg leading-relaxed">
          LA-DA (Lacak Aset Daerah) adalah program inisiatif yang bertujuan
          mendata dan menginventarisasi Barang Milik Daerah (BMD). Program ini
          dirancang untuk memastikan bahwa aset-aset yang dimiliki dan dikuasai
          oleh Pemerintah Daerah dapat lebih tertata dengan baik, dimanfaatkan
          secara optimal, dan dipertanggungjawabkan secara transparan.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Dengan La-Da, aset daerah tidak hanya tercatat dengan lebih rapi
          tetapi juga dapat lebih diberdayakan oleh Perangkat Daerah, sehingga
          mendukung efisiensi dan efektivitas dalam pengelolaan aset untuk
          kepentingan pembangunan dan pelayanan masyarakat.
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

export default LadaInfo;
