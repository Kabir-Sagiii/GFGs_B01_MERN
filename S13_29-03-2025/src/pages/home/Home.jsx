import { use } from "react";
import { useState } from "react";
import Counter from "../../components/counter/Counter";

function Home(props) {
  let mydata = useState("Home Page From State");

  let data = useState(1000);

  let [state, setState] = useState("Hyderabad");

  //mydata = [state,setterFn]

  function changeTitle() {
    // document.querySelector("h2").innerText = "Home Component";
    mydata[1]("Home Component From State");
    data[1](999);

    setState("Mumbai");
  }

  return (
    <div>
      <hr />
      <Counter />
      <hr />
      <h2>{mydata[0]}</h2>
      <h3>{data[0]}</h3>

      <h4>State Data:{state}</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut deserunt
        earum voluptate modi exercitationem ipsum sed soluta sunt molestiae
        aspernatur nobis saepe, consectetur, corrupti architecto quaerat minima
        ipsam pariatur. Voluptatibus corrupti modi nobis ad doloremque
        necessitatibus laborum sed libero, quod minima illo quam error
        consequatur architecto laudantium excepturi aspernatur cumque
        praesentium animi ea assumenda ratione fugit iste? Fuga aut suscipit
        obcaecati sapiente minus temporibus architecto. Quis odit doloremque eos
        mollitia amet. Labore, sunt debitis ex asperiores aspernatur tempore
        quam vel ratione voluptates commodi nostrum officia nulla laboriosam
        voluptas incidunt nihil officiis ullam consequuntur error quidem illo
        maxime cumque suscipit! Laboriosam.
      </p>
      <button onClick={changeTitle}>Modify Content</button>
    </div>
  );
}

export default Home;
