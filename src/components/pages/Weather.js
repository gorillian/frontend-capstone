export default function WeatherWidget(props) {
  return (
    <div>
      <div>
        <h1>Hello from WeatherWidget</h1>
      </div>
      <div>
        <button onClick={() => props.history.push("../")}>Go Back</button>
      </div>
    </div>
  );
}
