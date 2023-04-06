import React,{ useState, useEffect } from 'react'
import axios from "axios"

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
    <div>
      <h1>ART</h1>
        {art.map(filter => (
          <div key={filter._id}>
            
            <img src={filter.image} alt='art' style={{maxHeight:"200px",maxWidth:"200px"}}/>
            <p><b>Name: </b> {filter.nameOfProduct}</p>
            <p><b>Brand:</b> {filter.brand}</p>
            <p><b>Product details: </b> {filter.ProductDetails}</p>
          </div>
        ))}
    </div>
  )
}

export default ArtPage