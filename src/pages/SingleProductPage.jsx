import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../style/SingleProdPage.css";

const API_URL = "http://localhost:5005";

function SingleProductPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const getProduct = () => {
    const token = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/product/products/${productId}`, {
        headers: { Authorization: `Bearer${token}` },
      })
      .then((res) => {
        const oneProduct = res.data;
        setProduct(oneProduct);
      })
      .catch((error) => {
        console.log("THERE IS AN ERROR", error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="Page">
      {product && (
        <div className="details">
          <img src={product.image} alt="pic-product" className="BigImg" />
          <div />

          <div className="box">
            <div className="row">
              <h2>{product.nameOfProduct}</h2>
              <h3>{product.brand} </h3>

              <span>${product.price}</span>
            </div>

            <p>Size:{product.size}</p>
            <p>Category: {product.categoryOfProduct}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProductPage;
