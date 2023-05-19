import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 bg-gradient-to-r from-[#786117] to-[#362b07] h-full px-8">
      <div className="container mx-auto">
        <div className="relative h-3/4">
          <Carousel></Carousel>
          <div className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent to-gray-50 text-center">
            <h1 className="lg:text-4xl text-xl font-bold text-black lg:mb-4 animate-fadeIn">
              Welcome to our off road explorer
            </h1>
            <p className="text-lg text-black animate-slideInRight">
              Explore our amazing collection of products
            </p>
          </div>
        </div>
      </div>
      <div className="text-center font-serif text-white lg:mt-10 mt-4 lg:space-y-3 space-x-1">
        <p className="lg:text-2xl font-bold italic">New Collections</p>
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
