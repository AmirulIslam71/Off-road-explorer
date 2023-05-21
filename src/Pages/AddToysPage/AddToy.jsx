import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleAddToy = (event) => {
    event.preventDefault();
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;

    const newToy = {
      title: name,
      sellerName,
      sellerEmail,
      toys: [
        {
          picture: pictureUrl,
          name: subCategory,
          price,
          rating,
          quantity,
          details: description,
        },
      ],
    };
    console.log(newToy);
    // add toys in mongodb server
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added toy successfully",
          });
        }
      });

    setPictureUrl("");
    setName("");
    setSubCategory("");
    setPrice("");
    setRating("");
    setQuantity("");
    setDescription("");
  };

  return (
    <div className="bg-gradient-to-r from-sky-200 to-red-400">
      <div className="container mx-auto">
        <div className="w-3/4 mx-auto text-center py-4 space-y-3">
          <h1 className="lg:text-4xl text-2xl font-serif italic lg:font-extrabold font-bold text-orange-900">
            Add New Toys
          </h1>
          <p className="text-sm font-bold text-gray-700">
            Choosing the right toys for children is crucial. Opt for
            educational, interactive, and age-appropriate toys that promote
            creativity, learning, and social skills. Encourage imaginative play,
            problem-solving, and physical activity to foster holistic
            development and joyful experiences.
          </p>
        </div>
        <div className="w-3/4 mx-auto py-4">
          <form onSubmit={handleAddToy}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="sellerName"
                    className="block text-sm font-medium"
                  >
                    Seller Name
                  </label>
                  <input
                    type="text"
                    id="sellerName"
                    defaultValue={user?.displayName}
                    // onChange={(e) => setSellerName(e.target.defaultValue)}
                    className="mt-1 p-2 border rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="sellerEmail"
                    className="block text-sm font-medium"
                  >
                    Seller Email
                  </label>
                  <input
                    type="email"
                    id="sellerEmail"
                    defaultValue={user?.email}
                    // onChange={(e) => setSellerEmail(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subCategory"
                    className="block text-sm font-medium"
                  >
                    Sub-category
                  </label>
                  <input
                    type="text"
                    id="subCategory"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="pictureUrl"
                    className="block text-sm font-medium"
                  >
                    Picture URL of the toy
                  </label>
                  <input
                    type="text"
                    id="pictureUrl"
                    value={pictureUrl}
                    onChange={(e) => setPictureUrl(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-sm font-medium">
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="rating" className="block text-sm font-medium">
                    Rating
                  </label>
                  <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium"
                  >
                    Available Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500  rounded-md hover:bg-blue-400 w-full mx-auto font-bold uppercase"
              >
                Add Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
