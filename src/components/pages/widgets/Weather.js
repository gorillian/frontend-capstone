import { useState } from "react";

export default function WeatherWidget(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [isInfoReady, setIsInfoReady] = useState(false);
  const [temp, setTemp] = useState("");

  const getWeatherData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=2425dcb3f1133457ed3df4ea70cc463c`
    )
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.main.temp);
        setWeather(data.weather[0].main);
      });
  };

  const handleChange = (e) => {
    setIsInfoReady(false);
    setCity(e.target.value);
  };

  const handleClick = () => {
    setIsInfoReady(true);
    getWeatherData.apply();
  };

  return (
    <div className="weather-widget-wrapper">
      <div>
        <h1>Hello from WeatherWidget</h1>
      </div>
      <div className="weather-body">
        <div>
          <input
            value={city}
            type="text"
            placeholder="Enter A City Here"
            onChange={handleChange}
          />
          <button className="city-chooser" onClick={handleClick}>
            Submit
          </button>
        </div>
        {isInfoReady ? (
          <>
            <div className="city name">{city.toUpperCase()}:</div>
            <div className="city temp">Current Temperature: {temp}°F</div>
            <div className="city weather">Weather: {weather}</div>
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        <button onClick={() => props.history.push("../")}>Go Back</button>
      </div>
    </div>
  );
}
