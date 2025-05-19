import { myActionCreator } from "../action/myAction";
import myStore from "../store/Store";
import { useState } from "react";

var mycss = {
  color: "red",
  padding: "30px",
};
function Name() {
  const [state, setState] = useState("Aditya Verma");

  var btnStyle = {
    padding: "7px 20px",
  };

  const handleState = (event) => {
    setState(event.target.value);
  };
  return (
    <div style={mycss}>
      <h2 style={{ marginBottom: "20px" }}>Name Component</h2>
      <input placeholder="enter name" onChange={handleState} />
      <br />
      <br />
      <button
        style={btnStyle}
        onClick={() => {
          //   let actionObject = myActionCreator(state);
          //   myStore.dispatch(actionObject);

          myStore.dispatch(myActionCreator(state));
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Name;
