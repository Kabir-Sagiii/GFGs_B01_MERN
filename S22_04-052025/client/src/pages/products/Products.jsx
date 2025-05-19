import { useEffect } from "react";
import "./Products.css";
import axios from "axios";
import productsActionCreator from "../../redux/action/productsAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsdata = useSelector((store) => {
    return store.products;
  });

  useEffect(() => {
    if (productsdata.length === 0) {
      getProductsData();
    }
  }, []);

  const getProductsData = () => {
    console.log("request went");
    axios
      .get("http://localhost:9898/api/products/all-products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((resp) => {
        dispatch(productsActionCreator(resp.data.result));
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

      {productsdata.length > 0 ? (
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
              {productsdata.map((product) => {
                return (
                  <tr>
                    <td>
                      <img src={product.image} width="50" height={"50"} />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.rating}</td>
                    <td>
                      <button
                        id="update"
                        onClick={() => {
                          navigate(`/product-details?id=${product["_id"]}`);
                        }}
                      >
                        Details
                      </button>
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
