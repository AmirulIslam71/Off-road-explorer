import { NavLink } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <div>
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
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 sticky top-0">
            <NavbarMenu></NavbarMenu>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="bg-amber-600 divide-x-4 px-5 rounded-lg space-x-5">
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
            <NavLink
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;