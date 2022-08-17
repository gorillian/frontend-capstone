import { useState, useMemo } from "react";
import GoogleMapReact from "google-map-react";

const API_KEY = "AIzaSyC-IfyIdEBPwEMrBwTUU36nlr5QGT4d3dQ";
export default function Map(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [location, setLocation] = useState([]);

  const geoLocation = useMemo(() => {
    let arrayAddress = address.split(" ");
    let joinedAddress = arrayAddress.join("+");
    let mapLocation = `https://maps.googleapis.com/maps/api/geocode/json?address=${joinedAddress},+${city},+${state}+${zip}&key=${API_KEY}`;
    console.log(mapLocation);
    return mapLocation;
  }, [address, city, state, zip]);

  const coordinateGrab = () => {
    console.log(geoLocation);
    fetch(geoLocation)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data.results);
      })
      .catch((err) => console.error("Location broken error", err));
  };

  return (
    <div>
      <div>
        <h1>Map</h1>
      </div>
      <div className="input-wrapper">
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
        <label>ZIP Code</label>
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        ></input>
        <div>
          <button onClick={coordinateGrab}>Submit</button>
          <div>
            {" "}
            {location.length > 0 ? (
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: API_KEY,
                }}
                center={location[0].geometry.location}
                defaultZoom={15}
              >
                {/* <MapMarker
                  lat={location[0].geometry.location.lat}
                  lng={location[0].geometry.location.lng}
                /> */}
              </GoogleMapReact>
            ) : (
              <div className="empty-map-wrapper">this empty bruddah</div>
            )}
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => props.history.push("../")}>Go Back</button>
      </div>
    </div>
  );
}
// import {
//   useContext,
//   useMemo,
//   useState,
//   useRef,
//   useEffect,
//   createContext,
// } from "react";
// import GoogleMapReact from "google-map-react";

// const API_KEY = process.env.REACT_APP_LOCATION_API_KEY;

// const Location = () => {
//   const [listingState, listingDispatch] = createContext();
//   const { address, city, state, zip } = listingState;
//   const [geoLocationData, setGeoLocationData] = useState([]);

//   const addressRef = useRef();
//   const firstRunRef = useRef(true);

//   const handleDispatch = (value, field, type) => {
//     listingDispatch({
//       type,
//       payload: {
//         field,
//         value,
//       },
//     });
//   };

//   const memoGeoLocation = useMemo(() => {
//     let slicedAddress = address.split(" ");
//     let joinedAddress = slicedAddress.join("+");
//     let geoLocation = `https://maps.googleapis.com/maps/api/geocode/json?address=${joinedAddress},+${city},+${state}+${zip}&key=${API_KEY}`;

//     return geoLocation;
//   }, [address, city, state, zip]);

//   const getCoordinates = () => {
//     if (addressRef.current !== memoGeoLocation && (city || state || zip)) {
//       const geoLocation = memoGeoLocation;
//       addressRef.current = geoLocation;

//       fetch(geoLocation)
//         .then((res) => res.json())
//         .then((data) => {
//           setGeoLocationData(data.results);
//           localStorage.setItem("mapResults", JSON.stringify(data.results));
//         })
//         .catch((err) => console.error("Error fetching Geolocation", err));
//     }
//   };

//   useEffect(() => {
//     const cachedResults = localStorage.getItem("mapResults");

//     if (firstRunRef.current && cachedResults) {
//       setGeoLocationData(JSON.parse(cachedResults));
//       firstRunRef.current = false;
//     }
//   }, []);

//   return (
//     <div className="location-container create-listing-container">
//       <div className="listing-header-wrapper">
//         <div className="header-bg location-bg" />
//         <h1>Location</h1>
//       </div>

//       <div className="location-wrapper">
//         <div className="description">
//           Your user won't see the exact location until a confirmed booking
//         </div>

//         <div className="location-input-wrapper">
//           <div className="location-item">
//             <label>Address</label>
//             <input
//               type="text"
//               value={address}
//               onChange={(e) =>
//                 handleDispatch(e.target.value, "address", "SET_DATA")
//               }
//             />
//           </div>

//           <div className="location-item">
//             <label>City</label>
//             <input
//               type="text"
//               value={city}
//               onChange={(e) =>
//                 handleDispatch(e.target.value, "city", "SET_DATA")
//               }
//             />
//           </div>

//           <div className="location-item state-dropdown-wrapper">
//             <label>State</label>
//             <div className="state-dropdown">
//               <select
//                 defaultValue={state}
//                 onChange={(e) =>
//                   handleDispatch(e.target.value, "state", "SET_DATA")
//                 }
//               >
//                 <option value="">Select State</option>
//               </select>
//             </div>
//           </div>

//           <div className="location-item">
//             <label>Zip</label>
//             <input
//               type="text"
//               value={zip}
//               onChange={(e) =>
//                 handleDispatch(e.target.value, "zip", "SET_DATA")
//               }
//             />
//           </div>
//         </div>

//         <div className="submit-button-wrapper">
//           To view your location on the map.
//           <button onClick={getCoordinates}>Submit Location</button>
//         </div>

//         <div className="location-map-wrapper">
//           {geoLocationData.length > 0 ? (
//             <GoogleMapReact
//               bootstrapURLKeys={{
//                 key: API_KEY,
//               }}
//               center={geoLocationData[0].geometry.location}
//               defaultZoom={15}
//             ></GoogleMapReact>
//           ) : (
//             <div>hey</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Location;
