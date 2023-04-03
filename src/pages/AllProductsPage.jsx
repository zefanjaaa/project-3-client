import React from 'react'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import axios from "axios"



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
      
    
      <div className='allProductsPage' key={products._id}>
          
        <form>
        <h1>All Products Page</h1>
          {products.map((products) => <ProductCard key={products._id} {...products} products={products}/>)}

              </form>
              </div>
    </div>
  )
}

export default AllProductsPage;
