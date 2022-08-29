import { useState, useMemo } from "react";
import GoogleMapReact from "google-map-react";

const API_KEY = "AIzaSyC-IfyIdEBPwEMrBwTUU36nlr5QGT4d3dQ";
export default function Map(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [location, setLocation] = useState([]);

  const getCoordinates = useMemo(() => {
    let arrayAddress = address.split(" ");
    let joinedAddress = arrayAddress.join("+");
    let fullAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${joinedAddress},+${city},+${state}&key=${API_KEY}`;
    return fullAddress;
  }, [address, city, state]);

  const coordinateGrab = () => {
    fetch(getCoordinates)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data.results);
      })
      .catch((err) => console.error("Location broken error", err));
  };

  return (
    <div className="map-widget-wrapper">
      <div>
        <h1>Map</h1>
      </div>
      <div className="user-input-wrapper">
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <label>State</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></input>
        <button onClick={coordinateGrab} className="submit-map">
          Submit
        </button>
        <div className="back-button">
          <button onClick={() => props.history.push("../")}>Go Back</button>
        </div>
      </div>
      <div className="map-render">
        {" "}
        {location.length > 0 ? (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: API_KEY,
            }}
            center={location[0].geometry.location}
            defaultZoom={15}
          ></GoogleMapReact>
        ) : (
          <div className="empty-map-wrapper">Your Map Will Display Here</div>
        )}
      </div>
    </div>
  );
}
