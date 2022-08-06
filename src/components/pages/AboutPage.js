export default function aboutPage(props) {
  return (
    <div>
      <div>
        <h1>Hello from About</h1>
      </div>
      <div>
        <button onClick={() => props.history.push("../")}>Go Back</button>
      </div>
    </div>
  );
}
