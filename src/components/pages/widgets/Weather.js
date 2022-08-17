export default function WeatherWidget(props) {
  const locations = [
    {
      location: "Provo",
      lat: "40.233845",
      long: "-111.658531",
    },
    {},
  ];
  const getWeatherData = () => {
    const lat = locations.lat.value;
    const lon = locations.long.value;
    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=2425dcb3f1133457ed3df4ea70cc463c`
    )
      .then((res) => res.json())
      .then((data) => data.results);
  };
  return (
    <div className="weather-widget-wrapper">
      <div>
        <h1>Hello from WeatherWidget</h1>
      </div>
      <div className="weather-body">
        <select
          value={locations.location}
          onChange={getWeatherData}
          className="dropdown"
        >
          <option value="Provo">Provo</option>
          <option value="Chicago">Chicago</option>
          <option value="SanAntonio">San Antonio</option>
          <option value="NewYork">New York</option>
          <option value="Singapore">Singapore</option>
        </select>
      </div>
      <div>
        <button onClick={() => props.history.push("../")}>Go Back</button>
      </div>
    </div>
  );
}
