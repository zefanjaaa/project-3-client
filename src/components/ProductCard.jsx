import React from 'react'
// import {FaShoppingCart, FaBookmark, } from "react-icons/fa";
import "../style/ProductCard.css"
import {motion} from "framer-motion"



function ProductCard({price, image, brand, nameOfProduct}) {

 return (
  
    <div className='prodList'>
    <div key={nameOfProduct} className="prodCard">

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

