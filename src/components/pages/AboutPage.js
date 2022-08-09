export default function aboutPage(props) {
  return (
    <div>
      <div>
        <h1>About this Project</h1>
      </div>
      <div>
        <p>
          After taking a 3 month course about frontend development, we were
          assigned to make a final project. This final project is a react app
          that uses authentication aka Logins, Higher Order Components, Routing,
          Hooks and my best attempts at proper React practices. It includes 5
          widgets that can be accessed after the user has logged into their
          account.
          <br />
          <br /> These 5 Widgets are as follows:
          <br /> A weather widget that allows you to look at the weather
          <br /> A widget that queries a star wars api
          <br /> A map widget that shows you an address on a map by entering it
          into the search box <br />
          widget 4<br />
          widget 5<br />
          Enjoy my first attempt at a fully functioning react web app! <br />
          -Gorillian
        </p>
      </div>
      <div>
        <button onClick={() => props.history.push("../")}>Go Back</button>
      </div>
    </div>
  );
}
