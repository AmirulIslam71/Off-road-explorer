import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [toys, setToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order is ascending
  useTitle("AllToys");

  useEffect(() => {
    fetch("https://off-road-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data);
      });
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredToys(toys);
    } else {
      const filteredToysByCategory = toys.filter(
        (category) => category.title === selectedCategory
      );
      setFilteredToys(filteredToysByCategory);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(`https://off-road-server.vercel.app/toySearch/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data);
      });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    sortToys(filteredToys, e.target.value);
  };

  const sortToys = (toys, order) => {
    const sortedToys = [...toys];
    sortedToys.sort((a, b) => {
      if (order === "asc") {
        return a.toys[0].price - b.toys[0].price;
      } else {
        return b.toys[0].price - a.toys[0].price;
      }
    });
    setFilteredToys(sortedToys);
  };

  return (
    <div className="bg-gradient-to-r from-black to-gray-400">
      <div className="container mx-auto pb-4 overflow-x-auto w-full">
        <div className="flex justify-between py-8 ">
          <p className="lg:text-4xl text-2xl font-mono font-extrabold text-red-600">
            Available Car toys products
          </p>
          <div className="lg:w-64 w-28 mx-auto ">
            <form onSubmit={handleSearchSubmit} className="flex">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="rounded-l-lg appearance-none bg-gray-300 border border-white text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="All">All</option>
                {toys.map((category) => (
                  <option key={category._id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Enter your keyword"
                className="flex-1 appearance-none bg-white border border-gray-400 text-gray-700 lg:py-2 lg:px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-r-lg"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
          <select
            className="bg-orange-400 rounded-lg text-xl p-2"
            onChange={handleSortChange}
            value={sortOrder}
          >
            <option value="asc">Sort: Low to High</option>
            <option value="desc">Sort: High to Low</option>
          </select>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="">Product image and sellerInfo</th>
              <th>Toy Category</th>
              <th>Toy sub-category</th>
              <th>price</th>
              <th>quantity</th>
              <th>rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Render toy data */}
            {filteredToys.map((category) =>
              category.toys.map((toy, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                          <img src={toy.picture} alt="Toy" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{category?.sellerEmail}</div>
                        <div className="text-sm opacity-50">
                          {category?.sellerName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{category.title}</td>
                  <td>{toy.name}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>{toy.rating}</td>
                  <td>
                    <button className="btn btn-secondary btn-xs">
                      <Link to={`/details/${toy.id || index}`}>
                        View Details
                      </Link>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
