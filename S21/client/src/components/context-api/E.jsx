import { useContext } from "react";
import mycontext from "./Context";
function E() {
  const ACompData = useContext(mycontext);
  return (
    <div className="E">
      <h1>E Component</h1>
      <p>A Data : {ACompData}</p>
    </div>
  );
}

export default E;
