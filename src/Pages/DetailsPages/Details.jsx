import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [toy, setToy] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch("https://off-road-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        // Find the toy with the matching ID
        for (const category of data) {
          const foundToy = category.toys.find((t) => t.id === parseInt(id));
          if (foundToy) {
            setToy(foundToy);
            break;
          }
        }
      });
  }, [id]);

  if (!toy) {
    return <div>Loading...</div>;
  }

  const { picture, name, price, rating, quantity, details, color } = toy;

  return (
    <div className="bg-slate-400 py-4">
      <h1 className="text-center lg:text-4xl text-2xl py-5 ">
        Products details her
      </h1>
      <div className="card w-1/2 bg-base-100 shadow-xl mx-auto py-4">
        <figure>
          <img src={picture} alt="Shoes" className="h-1/2" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            <p className="text-sm">
              Color : <span className="text-red-950 text-xl">{color}</span>
            </p>
            <p className="text-sm">
              Price : <span className="text-red-950 text-xl">{price}</span>
            </p>
            <p className="text-sm">
              Rating : <span className="text-red-950 text-xl">{rating}</span>
            </p>
            <p className="text-sm">
              Rating : <span className="text-red-950 text-xl">{quantity}</span>
            </p>
            <p className="text-sm">
              Rating : <span className="text-red-950 text-xl">{details}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
