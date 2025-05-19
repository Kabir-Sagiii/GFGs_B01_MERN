import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Profile from "./pages/profile/Profile";
import ContactUs from "./pages/contactus/ContactUs";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      {isLoggedIn ? <Nav logout={logout} /> : null}

      <Routes>
        {/* <Route path={"/login"} element={<Login login={login} />} /> */}
        <Route path={"/signup"} element={<SignUp />} />
        {/* <Route path={"/"} element={<Home />} /> */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Login login={login} />}
        />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/users"} element={<Users />} />
        <Route path={"/contactus"} element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
