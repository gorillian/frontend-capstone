export default function swapiQuery(props) {
  return (
    <div>
      <div>
        <h1>Hello from SwapiQuery</h1>
      </div>
      <div>
        <button onClick={() => props.history.push("../")}>Go Back</button>
      </div>
    </div>
  );
}
