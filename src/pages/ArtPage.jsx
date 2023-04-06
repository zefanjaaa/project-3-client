import React,{ useState, useEffect } from 'react'
import axios from "axios"
import ProdCard3 from '../components/ProdCard3';
import { Container } from 'react-bootstrap';
import "../style/ArtPage.css"

const API = "http://localhost:5005";

function ArtPage() {
  const [products, setProducts] = useState([]);
  const [art,setArt] = useState([])

  
  
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
    const filteredProducts = products.filter(product => product.categoryOfProduct === "Art");
    setArt(filteredProducts);
  };
  filterProducts();
}, [products]);

  
 

console.log(art)
  return (
    <div className="allProductsPage">
      <Container>
      <h1>ART</h1>
     
      <div className='allProducts' >
      <ui className="ProdGrid">
      {art.map((product) => (<ProdCard3 key={product._id} {...product}/>))}
      </ui>   

      </div>
      </Container>
    </div>
  )
}

export default ArtPage