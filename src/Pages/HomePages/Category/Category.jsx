import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SingleCategory from "../SingleCategory/SingleCategory";

const Category = () => {
  const [categoryToys, setCategoryToys] = useState([]);
  useEffect(() => {
    fetch("toys.json")
      .then((res) => res.json())
      .then((data) => {
        setCategoryToys(data);
      });
  }, []);
  return (
    <div className="container mx-auto my-8">
      <Tabs>
        <TabList>
          {categoryToys.map((category) => (
            <Tab key={category.title}>{category.title}</Tab>
          ))}
        </TabList>

        {categoryToys.map((category) => (
          <TabPanel key={category.title}>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.toys.slice(0, 3).map((toy, index) => (
                <SingleCategory key={index} toy={toy}></SingleCategory>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Category;
