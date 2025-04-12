import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Profile from "./pages/profile/Profile";
import ContactUs from "./pages/contactus/ContactUs";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/users/Users";
import Name from "./redux/components/Name";
import Details from "./redux/components/Details";
import Dummy from "./redux/components/Dummy";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Nav />

      {/* <Name />

      <Details />

      <Dummy /> */}

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/users"} element={<Users />} />
        <Route path={"/contactus"} element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
