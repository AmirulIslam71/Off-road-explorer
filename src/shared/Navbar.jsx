import { NavLink } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100 container">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 sticky top-0"
          >
            <NavbarMenu></NavbarMenu>
          </ul>
        </div>
        <a className="btn btn-ghost lg:text-2xl lg:uppercase lg:font-serif text-amber-600">
          Off Road Explorer
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 sticky top-0">
          <NavbarMenu></NavbarMenu>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="bg-amber-600 divide-x-4 lg:px-5 md:px-2 rounded-lg lg:space-x-5">
          {user ? (
            <button onClick={handleLogOut}>
              <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                Logout
              </NavLink>
            </button>
          ) : (
            <NavLink
              to="/login"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >
              Login
            </NavLink>
          )}

          <NavLink
            className="lg:pl-3"
            to="/register"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
              };
            }}
          >
            Register
          </NavLink>
        </div>
        <div className="lg:pl-4 flex">
          {user ? (
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName || user?.email}
            >
              <div className="avatar online">
                <div className="w-7 rounded-full">
                  {user.photoURL ? (
                    <img src={user?.photoURL} />
                  ) : (
                    <img src="https://i.ibb.co/XYqXdQc/avator.jpg" />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="avatar offline">
              <div className="w-7 rounded-full">
                <img src="https://i.ibb.co/XYqXdQc/avator.jpg" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
