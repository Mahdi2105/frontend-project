import React, { useEffect } from "react";

const NotFound = ({ errMsg }) => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>{errMsg}</h2>
    </div>
  );
};

export default NotFound;
