import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../images/background.svg";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaTruck,
  FaChartBar,
  FaUsers,
  FaSearch,
  FaLightbulb,
  FaUserMd,
  FaShoppingCart,
  FaBook,
  FaFemale,
  FaWalking,
} from "react-icons/fa";

interface ProgramCardProps {
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ReactNode;
  path: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  shortDesc,
  longDesc,
  icon,
  path,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="flip-card w-[206px] h-[238px] cursor-pointer perspective-1000"
    >
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
        {/* Front side */}
        <div className="flip-card-front absolute w-full h-full bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center backface-hidden">
          <div className="h-[104px] px-3 pt-8 pb-3 flex items-center justify-center">
            <div className="text-[#01347c] text-4xl">{icon}</div>
          </div>
          <div className="p-2 flex justify-center">
            <div className="text-[#01347c] text-sm font-bold font-['Arial'] uppercase">
              {title}
            </div>
          </div>
          <div className="flex justify-center items-center px-4">
            <div className="w-[163px] text-center text-black text-xs font-light font-['Arial'] capitalize leading-none">
              {shortDesc}
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="flip-card-back absolute w-full h-full bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] backface-hidden rotate-y-180 flex items-center justify-center p-4">
          <div className="text-xs text-gray-600 font-light font-['Arial'] leading-tight text-center">
            {longDesc}
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: "I-CETA",
      shortDesc: "INDRAMAYU CEPAT TANGGAP",
      longDesc:
        "Sebuah Program Untuk Memberikan Solusi Pertolongan Pertama Bagi Permasalahan Kemacetan Dan Kedaruratan Yang Melapor Melalui Nomor Telepon, Whatsapp, Facebook, Instagram Dan Atau Twitter.",
      icon: <FaTruck />,
      path: "/iceta",
    },
    {
      title: "LE-DIG",
      shortDesc: "LEBU DIGITAL",
      longDesc:
        "Sebuah Program Untuk Mewujudkan Smart Village Atau Desa Cerdas, Dengan Dilakukan Pemasangan Wi-Fi Di Setiap Balai Desa Yang Terintegrasi Dengan Program I-CETA.",
      icon: <FaChartBar />,
      path: "/ledig",
    },
    {
      title: "BERSU-LING",
      shortDesc: "BERJAMAAH SUBUH KELILING",
      longDesc:
        "Sebuah Program Berjamaah Subuh Keliling Yang Dilakukan Di Kecamatan Untuk Berkomunikasi Langsung Dengan Masyarakat Di Pedesaan Serta Mendengarkan Suara, Keluhan Dan Masukan Dari Masyarakat.",
      icon: <FaUsers />,
      path: "/bersuling",
    },
    {
      title: "LA-DA",
      shortDesc: "LACAK ASET DAERAH",
      longDesc:
        "Program Yang Bertujuan Untuk Mendata Dan Menginventarisasi Barang Milik Daerah (BMD) Sehingga Aset-Aset Yang Dikuasai Oleh Pemerintah Daerah Dapat Lebih Tertata Dan Lebih Terfungsikan.",
      icon: <FaSearch />,
      path: "/lada",
    },
    {
      title: "DE-KAT",
      shortDesc: "DESA KABEH TERANG",
      longDesc:
        "Sebuah Program Untuk Mengurangi Angka Kriminalitas Dan Kecelakaan Dengan Membangun 1.000 (Seribu) Titik Penerangan Jalan Umum (PJU) Di Tingkat Desa.",
      icon: <FaLightbulb />,
      path: "/dekat",
    },
    {
      title: "DOK-MARU",
      shortDesc: "DOKTER MASUK RUMAH",
      longDesc:
        "Sebuah Program Layanan Kesehatan Yang Menghadirkan Bentuk Pelayanan Langsung Ke Rumah Warga.",
      icon: <FaUserMd />,
      path: "/dokmaru",
    },
    {
      title: "KRUW-CIL",
      shortDesc: "KREDIT USAHA WARUNG KECIL",
      longDesc:
        "Sebuah Program Yang Memberikan Kredit Kepada Warung Kecil Dan UMKM Untuk Mendorong Perekonomian Wong Cilik.",
      icon: <FaShoppingCart />,
      path: "/kruwcil",
    },
    {
      title: "JA-KET",
      shortDesc: "KEJAR PAKET",
      longDesc:
        "Program Kejar Paket Yang Meliputi Kelompok Belajar (Kejap) Paket A, B Dan C Yang Diselenggarakan Pemerintah Untuk Pemerataan Pendidikan Secara Gratis.",
      icon: <FaBook />,
      path: "/jaket",
    },
    {
      title: "PE-RI",
      shortDesc: "PEREMPUAN BERDIKARI",
      longDesc:
        "Sebuah Program Pemberdayaan Ekonomi Yang Diberikan Kepada Para Perempuan Purna Pekerja Migran Indonesia Dalam Bentuk Pelatihan Keterampilan Dan Pemberian Modal.",
      icon: <FaFemale />,
      path: "/peri",
    },
    {
      title: "A-LUR",
      shortDesc: "ALUN-ALUN RAKYAT",
      longDesc:
        "Sebuah Program Untuk Mengembalikan Alun-Alun Pendopo Kantor Bupati Indramayu Sebagai Ikon Dan Simbol Kedekatan Pemimpin Dan Rakyatnya.",
      icon: <FaWalking />,
      path: "/alur",
    },
  ];

  return (
    <div className="Dashboard w-full min-h-screen flex flex-col bg-white font-['Arial']">
      <Header />

      <div className="flex flex-1">
        <Sidebar onLogout={() => navigate("/")} />

        <main className="flex-1 relative">
          <div className="px-[156px] pt-[136px] pb-12">
            <h1 className="text-[#01347c] text-[50px] font-bold capitalize leading-[21px] mb-[70px]">
              Portal 10 Program Unggulan
              <br />
              <br />
              <br />
              Pemerintah Kabupaten Indramayu
            </h1>

            <div className="flex justify-between">
              <div className="mt-[30px]">
                <p className="text-[#01347c] text-[25px] font-bold capitalize leading-[21px]">
                  Selamat datang
                  <br />
                  <br />
                  di Situs Resmi Portal 10 Program Unggulan
                  <br />
                  <br />
                  Pemerintah Kabupaten Indramayu
                </p>
              </div>

              <img
                src={background}
                alt="Dashboard illustration"
                className="w-[627px] h-[347px]"
              />
            </div>

            {/* Program Cards Grid */}
            <div className="grid grid-cols-5 gap-x-6 gap-y-12 mt-[60px]">
              {programs.map((program, index) => (
                <ProgramCard key={index} {...program} />
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;
