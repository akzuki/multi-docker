import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      I'm some other OtherPage
      <Link to="/">Go back home</Link>
    </div>
  );
};
