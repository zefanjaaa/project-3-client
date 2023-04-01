import React from "react";
import * as AiIcons from "react-icons/ai";
import "../style/ProductCard.css";
import { motion } from "framer-motion";
import { Link, useParams } from 'react-router-dom'
// import {FaShoppingCart, FaBookmark, } from "react-icons/fa";
import "../style/ProductCard.css"




function ProductCard({ price, image, brand, nameOfProduct,_id }) {

  const { productId } = useParams()
  
  const API_URL = "http://localhost:3000"
  return (
      <div key={nameOfProduct} className="prodCard">
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={image}
          alt="pic-product"
          className="prodCardPic"
        />

      <div className="prodCardContent">
      
        <Link to={`${API_URL}/product/${_id}`} >
          <h3 className="prodPrice"> Name: {nameOfProduct}</h3>
        </Link>

          <h1 className="prodName">Brand: {brand}</h1>
          <p className="prodPrice">$ {price}</p>
          <AiIcons.AiFillAlipaySquare></AiIcons.AiFillAlipaySquare>
        </div>
      </div>
  );
}

export default ProductCard;
