import React from 'react'

import { useState, useEffect } from 'react'
import axios from "axios"

import ProdCard3 from '../components/ProdCard3';
import "../style/AllProdPage.css"
import { Container } from 'react-bootstrap';


const API = "http://localhost:5005";

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API}/product/products`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        setProducts(response.data)
        console.log('RESPONSE.DATA',response.data)
      })
     
      .catch((error) => console.log("THERE IS AN ERROR ==>", error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (

  <div className="allProductsPage">
      <Container>
      <h1>NEW ARRIVALS</h1>
    
    <div className='allProducts' key={products._id}>
          
    <ui className="ProdGrid">
          {products.map((products) => <ProdCard3 key={products._id} {...products} products={products}/>)}
          

    </ui>   

    </div>
    </Container>
  </div>

  )
}

export default AllProductsPage;
