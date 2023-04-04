import React from 'react'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import axios from "axios"
import ProductCard2 from '../components/ProductCard2';
import ProdCard3 from '../components/ProdCard3';


const API = "http://localhost:5005";

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API}/product/products`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => setProducts(response.data))
      .catch((error) => console.log("THERE IS AN ERROR ==>", error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="allProductsPage">
    
      <div className='allProductsPage' key={products._id}>
          
    <form>
          {products.map((products) => <ProdCard3 key={products._id} {...products} products={products}/>)}

              </form>
              </div>
    </div>
  )
}

export default AllProductsPage;
