import { useState } from "react";

export default function Map(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [information, setInformation] = useState([]);
  return (
    // console.log(address),
    <div>
      <div>
        <h1>Map</h1>
      </div>
      <div className="input-wrapper">
        <label>Address</label>
        <input type="text" onChange={(e) => setAddress(e.target.value)}></input>
        <label>City</label>
        <input type="text" onChange={(e) => setCity(e.target.value)}></input>
        <label>State</label>
        <input type="text" onChange={(e) => setState(e.target.value)}></input>
        <label>ZIP Code</label>
        <input type="text" onChange={(e) => setZip(e.target.value)}></input>
        <div>
          <button onClick={() => setInformation([address, city, state, zip])}>
            Submit
          </button>
          <div>{information}</div>
        </div>
      </div>
      <div className="map-wrapper">map here</div>
      <div>
        <button onClick={() => props.history.push("../")}>Go Back</button>
      </div>
    </div>
  );
}
