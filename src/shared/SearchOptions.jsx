import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchOptions = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic based on selectedCategory and searchQuery
    // ...
  };

  return (
    <div className="flex items-center justify-center">
      <div className="lg:w-64 w-28 mx-auto ">
        <form onSubmit={handleSearchSubmit} className="flex">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="rounded-l-lg appearance-none bg-gray-300 border border-white text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="Category">Category</option>
            <option value="Category1">Category 1</option>
            <option value="Category2">Category 2</option>
            <option value="Category3">Category 3</option>
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Enter your keyword"
            className=" flex-1 appearance-none bg-white border border-gray-400 text-gray-700 lg:py-2 lg:px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <button
            type="submit"
            className="bg-amber-700 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-r-lg"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchOptions;
