import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true, // Show pagination dots
    infinite: true, // Enable infinite loop
    speed: 500, // Animation speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
  };
  return (
    <div className="border-8 border-gray-400">
      <Slider {...settings}>
        {/* Add your slide content here */}
        <div>
          <img
            className="h-96 w-full"
            src="https://i.ytimg.com/vi/NtzftGb0EcM/maxresdefault.jpg"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            className="h-96 w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFMqm5XhmDsOSaSaAjJDuRhG-y_5G0Xbw6qRyLLamgQ&s"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            className="h-96 w-full"
            src="https://img.freepik.com/free-vector/flat-design-christmas-toy-collection_23-2148745483.jpg?w=2000"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
