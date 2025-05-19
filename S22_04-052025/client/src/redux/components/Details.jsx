import React from "react";
import { useSelector } from "react-redux";
function Details() {
  const data = useSelector((store) => {
    return store;
  });
  return (
    <div style={{ padding: "20px" }}>
      <hr />
      <h2 style={{ marginBottom: "10px", color: "green" }}>
        Details Component
      </h2>
      <p>Name:{data}</p>
    </div>
  );
}

export default Details;
