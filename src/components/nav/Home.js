import { Link } from "react-router-dom";

import map from "../../images/map.jpg";
import photos from "../../images/photos.jpg";
import starwars from "../../images/starwars.jpg";
import weather from "../../images/weather.jpg";

export default function Home() {
  return (
    <div className="widget-list-wrapper">
      <div>
        <h1>WELCOME TO THE HOME SCREEN</h1>
      </div>
      <div className="widget-grid">
        <div className="one">
          <Link to="/weather">
            <div className="nav-card">
              <h3
                style={{
                  backgroundImage: `url(${weather})`,
                }}
              >
                Weather
              </h3>
            </div>
          </Link>
        </div>
        <div className="two">
          <Link to="/swapi">
            <div className="nav-card">
              <h3
                style={{
                  backgroundImage: `url(${starwars})`,
                }}
              >
                SWAPI
              </h3>
            </div>
          </Link>
        </div>
        <div className="three">
          <Link to="/map">
            <div className="nav-card">
              <h3
                style={{
                  backgroundImage: `url(${map})`,
                }}
              >
                Map
              </h3>
            </div>
          </Link>
        </div>
        <div className="four">
          <Link to="/image">
            <div className="nav-card">
              <h3
                style={{
                  backgroundImage: `url(${photos})`,
                }}
              >
                Images
              </h3>
            </div>
          </Link>
        </div>
        {/* <Link to="/widgthree">Third</Link> */}
      </div>
    </div>
  );
}
