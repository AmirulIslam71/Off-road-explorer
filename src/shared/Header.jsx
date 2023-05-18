import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import SearchOptions from "./SearchOptions";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg-gray-800 h-24">
        <div className="flex justify-between container mx-auto p-3">
          <div>
            <img
              className="h-16"
              src="https://cdn.cdnlogo.com/logos/f/61/ford-4x4-off-road.svg"
              alt="Logo"
            />
          </div>
          <div className="flex items-center">
            <SearchOptions></SearchOptions>
          </div>
          <div className="text-white">
            <div className="flex items-center ">
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
