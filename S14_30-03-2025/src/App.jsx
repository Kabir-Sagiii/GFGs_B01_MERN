import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import A from "./components/context-api/A";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <A />
      {/* {isLoggedIn ? <Nav setIsLoggedIn={setIsLoggedIn} /> : null}
      <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
    </div>
  );
}

export default App;
