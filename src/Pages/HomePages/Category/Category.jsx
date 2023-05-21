import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SingleCategory from "../SingleCategory/SingleCategory";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  const [categoryToys, setCategoryToys] = useState([]);
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    fetch("https://off-road-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setCategoryToys(data);
      });
  }, []);
  return (
    <div className="container mx-auto my-8">
      <div className="text-center space-y-3 py-2">
        <h1 className="italic lg:text-2xl text-xl font-bold text-amber-900">
          Welcome toys cars categories
        </h1>
        <h1 className="uppercase font-serif font-extrabold lg:text-5xl text-red-800">
          For kids Entertainment
        </h1>
        <p className="w-3/4 mx-auto text-sm text-green-950">
          Discover endless fun and adventure with our incredible selection of
          toy cars, specially designed for children to ignite their imagination
          and create exciting playtime memories.
        </p>
      </div>
      <Tabs>
        <div className="text-center lg:mt-4  bg-gradient-to-t from-slate-700 to-slate-950 text-red-500 lg:text-2xl rounded-lg">
          <TabList>
            {categoryToys.slice(0, 3).map((category) => (
              <Tab key={category.title}>{category.title}</Tab>
            ))}
          </TabList>
        </div>

        <div data-aos="zoom-in">
          {categoryToys.slice(0, 3).map((category) => (
            <TabPanel key={category.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {category.toys.slice(0, 2).map((toy, index) => (
                  <SingleCategory key={index} toy={toy}></SingleCategory>
                ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default Category;
