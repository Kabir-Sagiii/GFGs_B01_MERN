import { useState } from "react";
import "./Context.css";
import B from "./B";
import mycontext from "./Context";
function A() {
  const [state, setState] = useState("Hyderabad");

  return (
    <div className="A">
      <h1>A Component</h1>
      <button
        onClick={() => {
          setState("Mumbai");
        }}
      >
        Submit Data
      </button>

      <mycontext.Provider value={state}>
        <B data={state} />
      </mycontext.Provider>
    </div>
  );
}

export default A;
