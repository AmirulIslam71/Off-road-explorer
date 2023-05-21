import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img
        className="h-96 mx-auto"
        src="https://i.ibb.co/RNKpwCK/404.png"
        alt=""
      />

      <div className="text-center ">
        <Link to="/">
          <button className="uppercase font-bold font-serif text-4xl btn-warning p-2 rounded-lg">
            back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
