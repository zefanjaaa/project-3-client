import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import ProdCard3 from '../components/ProdCard3';
import { Container } from 'react-bootstrap';
import "../style/HomeGoods.css"


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
    <div className="allProductsPage">
    <Container>
    <h1>HOME DÉCOR</h1>
    
    <div className='allProducts' >
    <ui className="ProdGrid">

      {home.map((product) => (<ProdCard3 key={product._id} {...product}/>))}
    </ui>   

      </div>
      </Container>
    </div>
  )
}

export default HomegoodsPage