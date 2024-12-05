import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import placeholderImage from "../../images/placeholder.svg";

const LedigInfo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = Array(6).fill(placeholderImage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

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

      {/* Gallery Section with Carousel */}
      <div className="mt-12">
        <h2 className="text-[#01347c] text-xl font-bold text-center">Galeri</h2>
        <div className="mt-2 border-t-2 border-[#01347c] w-16 mx-auto"></div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto mt-6">
          <div className="relative h-64 md:h-96 overflow-hidden rounded-md">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-700 ease-in-out
                  ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="absolute block w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-10 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
            <span className="sr-only">Previous</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-10 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
            <span className="sr-only">Next</span>
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors
                  ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
                aria-current={currentSlide === index}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedigInfo;
