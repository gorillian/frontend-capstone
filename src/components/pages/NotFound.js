import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown > 0) {
        setCountDown((c) => c - 1);
      } else {
        props.history.goBack();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1> Error 404: Not Found at "{props.location.pathname}"</h1>
      <h4>
        You will be redirected in 5 seconds, or <Link to="/">Go Back Home</Link>
      </h4>
    </div>
  );
};
