import { useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../UserProvider";

function withAuth(authorizedRoles) {
  return ({ children, withRedirect }) => {
    const { user } = useContext(UserContext);
    if (authorizedRoles.includes(user?.role)) {
      return children;
    } else {
      return withRedirect ? <Redirect to="/login" /> : null;
    }
  };
}
export default withAuth;
