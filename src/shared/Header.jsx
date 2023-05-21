import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="">
      <div data-aos="fade-up" data-aos-delay="200">
        <Navbar></Navbar>
      </div>
      <div className="bg-gray-800 lg:h-24 h-44">
        <div className="lg:flex justify-between container mx-auto p-3">
          <div>
            <img
              className="lg:h-16 h-7"
              src="https://cdn.cdnlogo.com/logos/f/61/ford-4x4-off-road.svg"
              alt="Logo"
              data-aos="flip-left"
            />
          </div>
          <div className="flex items-center">
            {/* <SearchOptions></SearchOptions> */}
          </div>
          <div className="text-white">
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-amber-700 text-6xl pr-4"
                icon={faHeadphonesSimple}
              ></FontAwesomeIcon>
              <div>
                <p className="text-xs">Customer Support 24/7</p>
                <p className="text-xs">
                  Call Us Now:{" "}
                  <span className="text-red-500">+0880-123-456-789</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
