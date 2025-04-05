import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Profile from "./pages/profile/Profile";
import ContactUs from "./pages/contactus/ContactUs";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/users/Users";

const productData = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1.",
    price: 29.99,
    image: "https://via.placeholder.com/250",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2.",
    price: 39.99,
    image: "https://via.placeholder.com/250",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for product 3.",
    price: 49.99,
    image: "https://via.placeholder.com/250",
  },
];
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/products"}
          element={<Products products={productData} />}
        />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/users"} element={<Users />} />
        <Route path={"/contactus"} element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
