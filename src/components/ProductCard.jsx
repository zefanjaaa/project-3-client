import "../style/ProductCard.css";
import { motion } from "framer-motion";
import React from 'react'
import "../style/ProductCard.css"
import { CartContex } from "../context/cartContex";
import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function ProductCard({ price, image, brand, nameOfProduct,_id }) {

  const API = "http://localhost:3000"
  
  const cart = useContext(CartContex);
  const ProductQuantity = cart.getProductQuantity(nameOfProduct._id);

  return (
      <div key={nameOfProduct} className="prodCard">
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={image}
          alt="pic-product"
          className="prodCardPic"
        />

      <div className="prodCardContent">
        <Link to={`${API}/product/${_id}`}>
          <h1 className="prodName">{nameOfProduct}</h1>
          </Link>
        <h3 className="prodPrice">{brand}</h3>
        <p className="prodPrice">${price}</p>


        {/* Add to cart logic */}

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
           <Button variant="dark" onClick={()=>cart.addOneToCart(nameOfProduct._id)}>Add to Cart</Button>
        }
          
        </div>
      </div>
  );
}

export default ProductCard;
