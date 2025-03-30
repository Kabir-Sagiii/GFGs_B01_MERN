import { useState } from "react";

function IplComp() {
  const [state, setState] = useState(
    "https://wallpapercave.com/wp/wp9541157.jpg"
  );

  function changeToMI() {
    setState(
      "https://th.bing.com/th/id/OIP.CCjFM8OYuKm_CmGOntI_5QHaEK?rs=1&pid=ImgDetMain"
    );
  }

  function changeToRCB() {
    setState("https://wallpapercave.com/wp/wp7433217.jpg");
  }

  return (
    <>
      <div>
        <h2>RCB Fans</h2>
        <img src={state} width={300} height={300} />
        <br />
        <br />
        <button onClick={changeToRCB}>RCB</button>&nbsp;
        <button onClick={changeToMI}>MI</button>
      </div>
    </>
  );
}

export default IplComp;
