import { Link } from "react-router-dom";

const SingleCategory = ({ toy }) => {
  const { picture, name, color, price } = toy;

  return (
    <div className="card lg:card-side bg-[#a49cdb] border font-bold">
      <figure className="border-8 w-1/2">
        <img src={picture} alt="toys" className="h-full w-full" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title font-extrabold font-serif italic">{name}</h2>
        <p className="text-sm">
          Color : <span className="text-red-950 text-xl">{color}</span>
        </p>
        <p className="text-sm">
          Price : <span className="text-red-950 text-xl">{price}</span>
        </p>
        <div className="card-actions justify-center">
          <Link to="/viewDetails">
            <button className="btn btn-primary w-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
