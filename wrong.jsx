import React from "react";
import { Link } from "react-router-dom";
function wrong() {
  return (
    <div>
      <h1>404 Erorr</h1>
      <Link to="/">
        {" "}
        <h3>Return Home</h3>
      </Link>
    </div>
  );
}

export default wrong;
