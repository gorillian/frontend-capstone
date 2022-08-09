import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="widget-wrapper">
      <div>
        <h1>WELCOME TO THE HOME SCREEN</h1>
      </div>
      <div className="widget-grid"></div>
      <Link to="/weather">Weather</Link>
      <Link to="/swapi">SWAPI</Link>
      <Link to="/map">Map</Link>
      {/* <Link to="/widgtwo">Second</Link>
      <Link to="/widgthree">Third</Link> */}
    </div>
  );
}
