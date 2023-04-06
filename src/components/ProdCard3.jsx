import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/ProdCard3.css"
// import { color, motion } from "framer-motion";
import React,{ useContext }  from 'react'
import { CartContex } from "../context/cartContex";
import AddtoWishlist from './AddtoWishlist';
import { Col, Form, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import { NavLink } from 'react-router-dom';


function ProdCard3({ price, image, brand, nameOfProduct,_id,productId,userId }) {
  
  const API_URL = "http://localhost:3000"
  
  
   const cart = useContext(CartContex);
   const ProductQuantity = cart.getProductQuantity(nameOfProduct._id);
 


return (
<div>
    <Card style={{ width: '15rem'}}  key={nameOfProduct}>
      <Card.Img className='pic' whileHover={{ scale: 0.9 }} variant="top" src={image} alt="pic-product"/>

      <Card.Body className="cardBody">
        <Card.Text>
          <Card.Text className="ProdName">
            <NavLink className="active" to={`${API_URL}/product/${_id}`}>
              <p>{nameOfProduct}</p>
            </NavLink>
          </Card.Text>

          <Card.Text>
            <p className="prodBrandText">{brand}</p>
          </Card.Text>

        <AddtoWishlist productId={productId} userId={userId} />
       
        </Card.Text>

        

        
      </Card.Body>
    </Card>
    </div>);
}

export default ProdCard3;