import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg-gray-800 h-24">
        <div className="flex justify-between container mx-auto p-3">
          <div>
            <img
              className="h-10"
              src="https://cdn.cdnlogo.com/logos/f/61/ford-4x4-off-road.svg"
              alt="Logo"
            />
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-r-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="text-white">
            <div className="flex items-center">
              <p>icon</p>
              <div>
                <p>Customer Support 24/7</p>
                <p>Call Us Now:+0880-123-456-789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
