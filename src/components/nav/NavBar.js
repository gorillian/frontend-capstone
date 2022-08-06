import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBarWrapper">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
}
