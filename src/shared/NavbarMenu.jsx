import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div className="space-x-5 shadow-2xl text-2xl">
      <NavLink
        to="/"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/allToys"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        All Toys
      </NavLink>
      <NavLink
        to="/myToys"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        My Toys
      </NavLink>
      <NavLink
        to="/addToys"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        Add Toys
      </NavLink>
      <NavLink
        to="/blogs"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        Blogs
      </NavLink>
    </div>
  );
};

export default NavbarMenu;
