// FE Capstone:
// Requirements-
// Render a dashboard w/ cards for widgets.
// MUST HAVE WIDGETS:
//  - Weather widget that fetch's from an api
//  - Swapi Query Widget -should be able to search swapi through your app and display information retrieved
//  - At least 3 other tools of your choosing
// About Page with a description of the Capstone and what you took away from this course.
// Login through custom api https://devpipeline-mock-api.herokuapp.com. A fallback could be  https://httpbin.org/post
// Logout

// Pages -
// Render all Widgets on Dashboard (as cards, not the actual widgets themselves).
// Show Route to individual widget with an explanation of what the widget is.
// About Page
// Login Page

// Must use BrowserRouter v5!!!!
// NavBar
// Must use SCSS
// Must use CRA
// Must be submitted through github link
// If you can host it, even better.

// Hints:
// Ask Questions
// Help each other
// Utilize the internet!
// Don't limit yourselves.
// HAVE FUN!!!
import { Route, Switch } from "react-router-dom";

import Home from "./components/nav/Home";
import LoginContainer from "./components/auth/LoginContainer";

import NavBar from "./components/nav/NavBar";
import aboutPage from "./components/pages/AboutPage";
import NotFound from "./components/pages/NotFound";
import WeatherWidget from "./components/pages/widgets/Weather";
import SwapiQuery from "./components/pages/widgets/SwapiQuery";
import Map from "./components/pages/widgets/Map";
import imageDisplayer from "./components/pages/widgets/Image";
import { StandardUser } from "./components/core/userRoles";

function App() {
  return (
    <div className="App">
      <Route path="/" component={LoginContainer} />
      <StandardUser withRedirect>
        <Route path="*" component={NavBar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={aboutPage} />
          <Route path="/weather" component={WeatherWidget} />
          <Route path="/swapi" component={SwapiQuery} />
          <Route path="/map" component={Map} />
          <Route path="/image" component={imageDisplayer} />
          {/* <Route path="/widgthree" component={WidgetThree}/> */}
          <Route component={NotFound} />
        </Switch>
      </StandardUser>
    </div>
  );
}

export default App;
