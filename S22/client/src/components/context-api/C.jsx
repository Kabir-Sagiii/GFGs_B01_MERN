import { useContext } from "react";
import mycontext from "./Context";
import "./Context.css";
import D from "./D";
function C({ data }) {
  let cityName = useContext(mycontext);
  return (
    <div className="C">
      <h1>C Component</h1>
      <p>{cityName}</p>
      <D data={data} />
    </div>
  );
}

export default C;
