import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div className="bg-gradient-to-r from-black to-gray-400">
      <div className="container mx-auto pb-4">
        <div className="flex justify-between py-8">
          <p className="lg:text-4xl text-2xl font-mono font-extrabold text-red-600">
            Available Car toys products
          </p>
          <select className="bg-orange-400 rounded-lg text-xl p-2">
            <option>sorting</option>
            <option>high price</option>
            <option>low price</option>
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
            {toys.map((category) =>
              category.toys.map((toy, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={toy.picture} alt="Toy" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{category.title}</div>
                        <div className="text-sm opacity-50">
                          {category.sellerName}
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
                    <button className="btn btn-ghost btn-xs">details</button>
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
