import React, { useState, useEffect,useContext } from 'react'
import axios from "axios"
import { AuthContext } from '../context/auth.context';
import ProdCard3 from '../components/ProdCard3';
import "../style/AllProdPage.css"
import { Container } from 'react-bootstrap';


const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";

function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext)
  
  const getAllProducts = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/product/products`, {
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

  return (

  <div className="allProductsPage">
      <Container>
      <br></br>
      <h1>NEW ARRIVALS</h1>
    
    <div className='allProducts' key={products._id}>
          
    <ui className="ProdGrid">
          {products.map((products) => <ProdCard3 key={products._id} {...products} productId={products._id} products={products}/>)}
          

    </ui>   

    </div>
    </Container>
  </div>

  )
}

export default AllProductsPage;
