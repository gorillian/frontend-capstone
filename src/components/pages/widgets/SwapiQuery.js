import { useEffect, useState } from "react";
export default function SwapiQuery(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pathname, setPathname] = useState("people");
  const handleOnChange = (e) => {
    setPathname(e.target.value);
  };
  function renderData() {
    return data.map((item) => {
      return (
        <div key={item.uid} className="swapi-data-wrapper">
          <div>{item.name}</div>
        </div>
      );
    });
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.swapi.tech/api/${pathname}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.error("Fetch Swapi Error: ", err));
  }, [pathname]);
  return (
    <div>
      <h1>Star Wars API</h1>
      <select value={pathname} onChange={handleOnChange} className="dropdown">
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="species">Species</option>
        <option value="starships">Ships</option>
      </select>
      {isLoading ? <div>... Loading</div> : <div>{renderData()}</div>}

      <div>
        <button onClick={() => props.history.push("../")}>Go Back</button>
      </div>
    </div>
  );
}
