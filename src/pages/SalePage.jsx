import React, { useState, useEffect } from "react";
import axios from "axios";
import ProdCard3 from "../components/ProdCard3";
import "../style/Sale.css";
import { Container } from "react-bootstrap";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function SalePage() {
  const [sale, setSale] = useState([]);
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/product/products`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log("THERE IS AN ERROR ==>", error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      const filteredProducts = products.filter(
        (product) => product.categoryOfProduct === "Sale"
      );
      setSale(filteredProducts);
    };
    filterProducts();
  }, [products]);

  return (
    <div className="allProductsPage">
      <Container>
      <br></br>
        <h1>SALE</h1>

        <div className="allProducts" key={products._id}>
          <ui className="ProdGrid">
            {sale.map((products) => (
              <ProdCard3
                ProdCard3
                key={products._id}
                {...products}
                productId={products._id}
                products={products}
              />
            ))}
          </ui>
        </div>
      </Container>
    </div>
  );
}

export default SalePage;
