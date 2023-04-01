import React from 'react'
// import {FaShoppingCart, FaBookmark, } from "react-icons/fa";
import "../style/ProductCard.css"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'



function ProductCard({price, image, brand, nameOfProduct,_id}) {

 return (
  
   <div className='prodList'>
     
     <div  className="prodCard">
     
<Link to={`/products/${_id}`}>
       <h2 className='prodCard'> {nameOfProduct}</h2>
       </Link>
    <motion.img whileHover={{scale: 0.9}} src={image} alt="pic-product" className='prodCardPic'/>

    
    

    <div className='prodCardContent'>

    <h3 className='prodPrice'>{brand}</h3>
    <h1 className='prodName'>{nameOfProduct}</h1>
    <p className='prodPrice'>${price}</p>
    
  
   </div>


    </div>

    </div>
  )
}

export default ProductCard

