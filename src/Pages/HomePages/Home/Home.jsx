import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import Supports from "../Supports/Supports";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <div className="bg-gradient-to-r from-black to-slate-600">
        <Gallery></Gallery>
      </div>
      <Category></Category>
      <Supports></Supports>
      <Brands></Brands>
    </div>
  );
};

export default Home;
