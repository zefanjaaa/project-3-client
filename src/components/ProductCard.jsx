import React from "react";
import * as AiIcons from "react-icons/ai";
import "../style/ProductCard.css";
import { motion } from "framer-motion";
import React from 'react'
// import {FaShoppingCart, FaBookmark, } from "react-icons/fa";
import "../style/ProductCard.css"
import {motion} from "framer-motion"

function ProductCard({ price, image, brand, nameOfProduct }) {
  return (
      <div key={nameOfProduct} className="prodCard">
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={image}
          alt="pic-product"
          className="prodCardPic"
        />

        <div className="prodCardContent">
          <h3 className="prodPrice">{brand}</h3>
          <h1 className="prodName">{nameOfProduct}</h1>
          <p className="prodPrice">${price}</p>
          <AiIcons.AiFillAlipaySquare></AiIcons.AiFillAlipaySquare>
        </div>
      </div>
  );
}

export default ProductCard;
