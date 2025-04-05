import { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <h1>Count Value is : {count}</h1>
      <button onClick={updateCount}>incCount</button>
    </div>
  );
}

export default Counter;
