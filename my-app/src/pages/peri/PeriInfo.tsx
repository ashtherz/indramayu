import React from "react";
import placeholderImage from "../../images/placeholder.svg";

const PeriInfo: React.FC = () => {
  return (
    <div>
      <div className="bg-[#f7fbff] p-6 mt-6 rounded-md shadow mx-auto max-w-[1400px]">
        <p className="text-lg leading-relaxed">
          PE-RI (Perempuan Berdikari) adalah program pemberdayaan ekonomi yang
          dirancang khusus untuk perempuan purna Pekerja Migran Indonesia.
          Program ini bertujuan untuk membantu mereka dalam meningkatkan
          kualitas hidup melalui pelatihan keterampilan serta pemberian modal
          usaha.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Dengan adanya pelatihan keterampilan yang relevan dengan kebutuhan
          pasar, peserta diharapkan dapat memperoleh keahlian baru yang
          bermanfaat. Selain itu, pemberian modal usaha juga bertujuan untuk
          mendukung mereka dalam membangun dan mengembangkan usaha, sehingga
          dapat menciptakan kemandirian ekonomi dan mengurangi ketergantungan
          pada sektor informal.
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

export default PeriInfo;
