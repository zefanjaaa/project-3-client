import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"

const API = "http://localhost:5005";


function HomegoodsPage() {
  const [products, setProducts] = useState([]);
  const [home, setHome] = useState([])
  const getAllProducts = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API}/product/products`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        setProducts(response.data)
     
      })
      .catch((error) => console.log("THERE IS AN ERROR ==>", error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);


useEffect(() => {const filterProducts = () => {
  const filteredProducts = products.filter(product => product.categoryOfProduct === "Home");
  setHome(filteredProducts);
};
filterProducts();
}, [products]);

  return (
      <div>
      <h1>Homegoods</h1>
      {home.map(filter => (
          <div key={filter._id}>
            
            <img src={filter.image} alt='art' style={{maxHeight:"200px",maxWidth:"200px"}}/>
            <p><b>Name: </b> {filter.nameOfProduct}</p>
            <p><b>Brand:</b> {filter.brand}</p>
          </div>
        ))}
    </div>
  )
}

export default HomegoodsPage