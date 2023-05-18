import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 bg-gradient-to-r from-[#d4a819] to-[#d4a819] h-full">
      <div className="container mx-auto">
        <div className="relative">
          <Carousel></Carousel>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl font-bold text-white mb-4 animate-fadeIn">
              Welcome to our website
            </h1>
            <p className="text-lg text-white animate-slideInRight">
              Explore our amazing collection of products
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>New Collections</p>
        <h2>For kids</h2>
        <p>
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
