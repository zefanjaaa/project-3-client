import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/ProdCard3.css"
// import { color, motion } from "framer-motion";
import React,{ useContext,useState }  from 'react'
import { CartContex } from "../context/cartContex";
import AddtoWishlist from './AddtoWishlist';
import { Col, Form, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';


function ProdCard3({ price, image, brand, nameOfProduct,_id,productId,userId }) {
  
  const API_URL = "http://localhost:3000"
  
console.log(productId)
   const cart = useContext(CartContex);
   const ProductQuantity = cart.getProductQuantity(nameOfProduct._id);
 
//   const WishListButton = () => {
   
//     const token = localStorage.getItem('authToken')

//     const handleClick = () => {
    
    
//       axios.post(`${API}/${productId}/wishlist`, { headers: { Authorization: `Bearer${token}` } })
//         .then((response) => {
//           if (response.data === 200) {
//             console.log("product added to wishlist")
//           } else {
//             console.log("product not added to wishlist")
//           }
//         })
//         .catch((error) => {
//           console.log('there is an error with the wishlist', error)
//         })
//     }
    
// }

return (
<div>
    <Card style={{ width: '15rem'}}  key={nameOfProduct}>
      <Card.Img className='pic' whileHover={{ scale: 0.9 }} variant="top" src={image} alt="pic-product"/>

      <Card.Body className='cardBody'>
        <Card.Title className='BrandText'>{brand}</Card.Title>
        <Card.Text>
        <Link to={`${API_URL}/product/${_id}`}>
        <p className="prodNameText">{nameOfProduct}</p>
        </Link>
        <Card.Text className="prodPriceText">${price}</Card.Text>

      

        <AddtoWishlist productId={productId} userId={userId} />
        
        </Card.Text>

        

        
      </Card.Body>
    </Card>
    </div>);
}

export default ProdCard3;