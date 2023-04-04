import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/ProdCard3.css"
// import { color, motion } from "framer-motion";
import React from 'react'
import { CartContex } from "../context/cartContex";
import { useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

function ProdCard3({ price, image, brand, nameOfProduct,_id }) {

   const API_URL = "http://localhost:3000"
  
   const cart = useContext(CartContex);
   const ProductQuantity = cart.getProductQuantity(nameOfProduct._id);
 


return (

    <Card style={{ width: '15rem'}}  key={nameOfProduct}>
      <Card.Img className='pic' whileHover={{ scale: 0.9 }} variant="top" src={image} alt="pic-product"/>

      <Card.Body className='cardBody'>
        <Card.Title className='BrandText'>{brand}</Card.Title>
        <Card.Text>

        <h3 className="prodNameText">{nameOfProduct}</h3>
        
        <Card.Text className="prodPriceText">${price}</Card.Text>

        <FaIcons.FaHeart></FaIcons.FaHeart>

        </Card.Text>

        {ProductQuantity > 0 ?
         <div>

            <Form as={Row}>
        
              <Form.Label column="true" sm= "6">In Cart:{ProductQuantity}</Form.Label>
              <Col sm="6">
              <Button variant="dark" sm= "6" onClick={()=> cart.addOneToCart(nameOfProduct._id)} className="mx-2">+</Button>
              <Button variant="dark" sm= "6" onClick={()=> cart.removeOneFromCart(nameOfProduct._id)} className="mx-2">-</Button>
              
              </Col>
            </Form>
             <Button variant="dark" onClick={()=> cart.deleteCart(nameOfProduct.id)} className="my-2">Remove from Cart</Button>
         </div>

         : //else
         <BsIcons.BsBagFill variant="dark" onClick={()=>cart.addOneToCart(nameOfProduct._id)}>Add to Cart</BsIcons.BsBagFill>
      }

        
      </Card.Body>
    </Card>
  );
}

export default ProdCard3;