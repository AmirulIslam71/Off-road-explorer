import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useTitle("MyToys");

  useEffect(() => {
    fetch(`https://off-road-server.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json)
          .then((data) => {
            console.log(data);
            setToys((prevToys) => prevToys.filter((toy) => toy._id !== id));
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  const handleUpdateToy = (event, _id) => {
    event.preventDefault();
    const form = event.target;
    const toyTitle = form.toyTitle.value;
    const toyName = form.toyName.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updateToy = {
      title: toyTitle,
      toys: [
        {
          name: toyName,
          price,
          quantity,
          details,
        },
      ],
    };
    console.log(updateToy);

    fetch(`http://localhost:5000/allToys/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Updated toy successfully",
          });
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-black to-gray-400">
      <div className="container mx-auto pb-4">
        <div className="flex justify-between py-8 ">
          <p className="lg:text-4xl text-2xl font-mono font-extrabold text-red-600">
            My toys products
          </p>
        </div>
        <div className="overflow-x-auto w-full">
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
                          <div className="mask mask-squircle w-24 h-24">
                            <img src={toy.picture} alt="Toy" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {category?.sellerEmail}
                          </div>
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
                      {/* The button to open modal */}
                      <label
                        htmlFor={`my-modal-${index}`}
                        className="btn-success px-2 rounded-lg"
                      >
                        Edit
                      </label>

                      {/* The modal */}
                      <input
                        type="checkbox"
                        id={`my-modal-${index}`}
                        className="modal-toggle"
                      />
                      <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                          <div className="w-full mx-auto py-4">
                            <form
                              onSubmit={(event) =>
                                handleUpdateToy(event, category._id)
                              }
                            >
                              {/* Form fields */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                <div>
                                  <div className="mb-4">
                                    <label
                                      htmlFor={`name-${index}`}
                                      className="block text-sm font-medium"
                                    >
                                      Product Name
                                    </label>
                                    <input
                                      type="text"
                                      name="toyTitle"
                                      defaultValue={category?.title}
                                      id={`name-${index}`}
                                      className="mt-1 p-2 border rounded-md w-full"
                                      required
                                    />
                                  </div>

                                  <div className="mb-4">
                                    <label
                                      htmlFor={`subCategory-${index}`}
                                      className="block text-sm font-medium"
                                    >
                                      Sub-category
                                    </label>
                                    <input
                                      type="text"
                                      name="toyName"
                                      defaultValue={toy?.name}
                                      id={`subCategory-${index}`}
                                      className="mt-1 p-2 border rounded-md w-full"
                                      required
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="mb-4">
                                    <label
                                      htmlFor={`price-${index}`}
                                      className="block text-sm font-medium"
                                    >
                                      Price
                                    </label>
                                    <input
                                      type="text"
                                      name="price"
                                      defaultValue={toy?.price}
                                      id={`price-${index}`}
                                      className="mt-1 p-2 border rounded-md w-full"
                                      required
                                    />
                                  </div>

                                  <div className="mb-4">
                                    <label
                                      htmlFor={`quantity-${index}`}
                                      className="block text-sm font-medium"
                                    >
                                      Available Quantity
                                    </label>
                                    <input
                                      type="number"
                                      name="quantity"
                                      defaultValue={toy?.quantity}
                                      id={`quantity-${index}`}
                                      className="mt-1 p-2 border rounded-md w-full"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor={`description-${index}`}
                                  className="block text-sm font-medium"
                                >
                                  Description
                                </label>
                                <textarea
                                  id={`description-${index}`}
                                  className="mt-1 p-2 border rounded-md w-full"
                                  name="details"
                                  rows="4"
                                  required
                                  defaultValue={toy?.details}
                                ></textarea>
                              </div>
                              <div className="flex justify-end">
                                <button
                                  type="submit"
                                  className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-400 w-full mx-auto font-bold uppercase"
                                >
                                  Edit Toy
                                </button>
                              </div>
                            </form>
                          </div>
                          <div className="modal-action">
                            <label
                              htmlFor={`my-modal-${index}`}
                              className="btn"
                            >
                              close
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(category._id)}
                        className="btn btn-warning btn-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
