import { useState, useEffect } from "react";
import "./Products.css";
import axios from "axios";

function Products() {
  const [state, setState] = useState([]);
  useEffect(() => {
    getProductsData();
  }, []);
  const getProductsData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        console.log(resp.data);
        setState(resp.data);
      })
      .catch((error) => {
        alert("Failed to get Products Data");
      });
  };

  return (
    <div className="productsContainer">
      <div className="banner">
        <div>
          <h1>Products Information</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            iure ipsam laudantium vero fugiat dolores aspernatur exercitationem
            voluptatibus? Quos rerum sint voluptatem eum nemo, obcaecati cumque,
            nihil mollitia modi reiciendis dolorem dolor cum eaque nam? Totam,
            ipsam minima? Obcaecati, nemo.
          </p>
        </div>
      </div>

      {state.length > 0 ? (
        <div className="productsData">
          <table width={"1200px"} rules="rows">
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>PRODUCT NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>RATING</th>
                <th colspan="2">ACTION</th>
              </tr>
            </thead>

            <tbody align="center">
              {state.map((product) => {
                return (
                  <tr>
                    <td>
                      <img src={product.image} width="50" height={"50"} />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.rating.rate}</td>
                    <td>
                      <button id="update">Update</button>
                    </td>
                    <td>
                      <button id="delete">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2>No Products Data</h2>
      )}
    </div>
  );
}

export default Products;
