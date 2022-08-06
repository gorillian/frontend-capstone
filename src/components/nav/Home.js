import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="widgetWrapper">
      <div>
        <h1>WELCOME TO THE HOME SCREEN</h1>
      </div>
      <NavLink to="/weather">Weather</NavLink>
      <NavLink to="/swapi">SWAPI</NavLink>
      {/* <NavLink to="/widgone">First</NavLink>
      <NavLink to="/widgtwo">Second</NavLink>
      <NavLink to="/widgthree">Third</NavLink> */}
    </div>
  );
}
