import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Brands = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="bg-yellow-100 py-5">
      <div className="container mx-auto divide-y-4 divide-red-500">
        <p className="text-2xl md:text-3xl lg:text-4xl p-4 text-orange-800 font-serif lg:font-bold">
          Top Brands
        </p>
        <div className="grid grid-cols-5 lg:grid-cols-10 gap-2 py-4 bg-slate-800 px-2 rounded-lg">
          <img
            className="h-48 w-full rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://i.ibb.co/BTcdjSp/1.png"
            alt=""
          />
          <img
            className="h-48 w-full rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://i.ibb.co/NmmyNX9/2.png"
            alt=""
          />
          <img
            className="h-48 w-full rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://i.ibb.co/xXQ6rDB/3.jpg"
            alt=""
          />
          <img
            className="h-48 w-full rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://i.ibb.co/1MPhRVZ/4.jpg"
            alt=""
          />
          <img
            className="h-48 w-full rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://i.ibb.co/M58pCwW/5.png"
            alt=""
          />
          <img
            className="h-48 w-full rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://i.ibb.co/Jt04xZc/6.jpg"
            alt=""
          />
          <img
            className="h-48 w-full rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://i.ibb.co/qrjjxhr/7.jpg"
            alt=""
          />
          <img
            className="h-48 w-full rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://i.ibb.co/BTYZ4bK/8.jpg"
            alt=""
          />
          <img
            className="h-48 w-full rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://i.ibb.co/dQb1bq7/9.jpg"
            alt=""
          />
          <img
            className="h-48 w-full rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://i.ibb.co/2h3FcjR/10.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
