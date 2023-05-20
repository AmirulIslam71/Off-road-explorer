import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div>
      <div className="text-center space-y-3 py-3">
        <h1 className="italic font-mono lg:text-3xl text-xl font-bold text-white">
          Welcome toys cars Gallery
        </h1>
        <h1 className=" font-mono font-extrabold lg:text-5xl text-slate-200">
          Showing some pictures for kids Entertainment
        </h1>
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4   py-6 container mx-auto"
        data-aos="fade-right"
      >
        <img
          className="h-80 w-full border-2 border-red-800 rounded-lg"
          src="https://i.ibb.co/7zLVRXt/blue.jpg"
          alt=""
          data-aos="fade-up"
        />
        <img
          className="h-80 w-full border-2 border-red-800 rounded-lg"
          src="https://i.ibb.co/JskSLkr/green.jpg"
          alt=""
          data-aos="fade-down"
          data-aos-delay="200"
        />
        <img
          className="h-80 w-full border-2 border-red-800 rounded-lg"
          src="https://i.ibb.co/bF0yFxq/green.webp"
          alt=""
          data-aos="fade-right"
          data-aos-delay="400"
        />
        <img
          className="h-80 w-full border-2 border-red-800 rounded-lg"
          src="https://i.ibb.co/rFyTpBY/red.jpg"
          alt=""
          data-aos="fade-up"
          data-aos-delay="500"
        />
        <img
          className="h-80 w-full border-2 border-red-800 rounded-lg"
          src="https://i.ibb.co/rtJYW5p/silve.jpg"
          alt=""
          data-aos="fade-down"
          data-aos-delay="700"
        />
        <img
          className="h-80 w-full border-2 border-red-800 rounded-lg"
          src="https://i.ibb.co/Zz4z2YR/yellow.jpg"
          alt=""
          data-aos="fade-right"
          data-aos-delay="1000"
        />
      </div>
    </div>
  );
};

export default Gallery;
