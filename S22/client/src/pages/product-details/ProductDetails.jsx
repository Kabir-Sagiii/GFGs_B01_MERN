import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
function ProductDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState({
    _id: "",
    title: "",
    image: "",
    description: "",
    rating: "",
    category: "",
    price: 0,
  });
  const id = searchParams.get("id");
  useEffect(() => {
    axios
      .get(`http://localhost:9898/api/products/one-product?id=${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setState(res.data.result);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  return (
    <div style={{ padding: "100px" }}>
      <h1>{state.category}</h1>
      <br />
      <h3>{state.title}</h3>
      <br />
      <p>{state.price}</p>
      <br />
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
