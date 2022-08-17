import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";

function LoginContainer() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default LoginContainer;
