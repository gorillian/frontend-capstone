import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../UserProvider";

export default function Login() {
  const history = useHistory();
  const { setUser, setAuthIsLoading, authIsLoading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setAuthIsLoading(true);
    setError("");

    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged In") {
          setUser(data.user);
          setAuthIsLoading(false);
          history.push("/");
        }
      })
      .catch((err) => {
        setAuthIsLoading(false);
        setError("Invalid Credentials");
        console.error("Login Error: ", err);
      });
  }

  return (
    <div className="login-wrapper">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          {!authIsLoading ? <input type="submit" /> : <h1>...submitting</h1>}
        </div>
        {error}
      </form>
    </div>
  );
}
