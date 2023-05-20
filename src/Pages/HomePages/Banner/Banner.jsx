import Carousel from "./Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 bg-gradient-to-r from-gray-800 to-[#786117] h-full px-8">
      <div className="container mx-auto">
        <div className="relative h-3/4 py-4" data-aos="fade-right">
          <Carousel></Carousel>
        </div>
      </div>
      <div
        className="text-center font-serif text-white lg:mt-10 mt-4 lg:space-y-3 space-x-1"
        data-aos="fade-left"
      >
        <p
          className="lg:text-2xl font-bold italic"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          New Collections
        </p>
        <h2 className="lg:text-6xl md:text-4xl text-3xl text-red-500">
          For kids
        </h2>
        <p className="text-sm text-gray-400">
          Children love to explore, learn, and play. Toys spark their
          imagination, creativity, and joy. Through play, they develop important
          skills and build lasting memories. Toys encourage curiosity,
          collaboration, and growth. Lets cherish and support their playful
          journey.
        </p>
      </div>
    </div>
  );
};

export default Banner;
