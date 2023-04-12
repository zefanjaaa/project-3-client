// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style/ProdCard3.css";
// import { color, motion } from "framer-motion";
import React, { useContext } from "react";
import { CartContex } from "../context/cartContex";
import AddtoWishlist from "./AddtoWishlist";
// import { Col, Form, Row } from "react-bootstrap";
// import * as FaIcons from "react-icons/fa";
// import * as BsIcons from "react-icons/bs";
import { NavLink } from "react-router-dom";

function ProdCard3({
  price,
  image,
  brand,
  nameOfProduct,
  _id,
  productId,
  userId,
}) {



  const cart = useContext(CartContex);
  const ProductQuantity = cart.getProductQuantity(nameOfProduct._id);

  return (
    <div>
      <Card border="light" style={{ width: "15rem" }} key={nameOfProduct}>
      <NavLink className="active" to={`/product/${productId}`}>
        
        <Card.Img
          className="pic"
          whileHover={{ scale: 0.9 }}
          variant="top"
          src={image}
          alt="pic-product"
        />
              </NavLink>
             
        <Card.Body className="cardBody">
          <Card.Text>
            <Card.Text className="ProdName">
              <NavLink className="active" to={`/product/${productId}`}>
                <p>{nameOfProduct}</p>
              </NavLink>
            </Card.Text>
            <Card.Text>
            <NavLink className="active" to={`/product/${productId}`}>
              
                <p className="prodBrandText">{brand}</p>
                </NavLink>
                
            </Card.Text>
          
            <Card.Text className="prodPriceText">
            
            <p className="prodPriceText">${price} <span></span> <AddtoWishlist productId={productId} userId={userId} /></p>
            
            </Card.Text>

          </Card.Text>
          </Card.Body>
         
          
      </Card>
    </div>
  );
}

export default ProdCard3;
