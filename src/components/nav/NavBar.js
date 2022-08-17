import { Route, NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";

import { UserContext } from "../UserProvider";

function Logout() {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    logout();
  }, []);

  return <div>...Logging Out</div>;
}

export default function NavBar() {
  return (
    <div className="nav-bar-wrapper">
      <div className="permanent-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="logout-wrapper">
        <NavLink to="/logout">Logout</NavLink>
        <Route path="/logout" component={Logout} />
      </div>
    </div>
  );
}
