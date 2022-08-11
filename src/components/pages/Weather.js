export default function weatherWidget(props) {
  return (
    <div className="weather-widget-wrapper">
      <div>
        <h1>Hello from WeatherWidget</h1>
      </div>
      <div className="weather-body">This is where the info will go</div>
      <div>
        <button onClick={() => props.history.push("../")}>Go Back</button>
      </div>
    </div>
  );
}
