import React from "react";
import { useSelector } from "react-redux";
function Dummy() {
  var data = useSelector(function (value) {
    value = value + " is great";
    return value;
  });
  return (
    <div>
      <h2>Dummy Component</h2>
      <h5>{data}</h5>
    </div>
  );
}

export default Dummy;
