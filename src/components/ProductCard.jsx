import React from 'react'
import {FaShoppingCart, FaBookmark, } from "react-icons/fa";



function ProductCard({price, image, brand, nameOfProduct}) {

 return (
  
    <div className='prodList'>
    <div key={nameOfProduct} className="prodCard">

    <img src={image} alt="pic-product" className='prodCardPic'/>

    <FaShoppingCart className={"prodCardCard"} />
    <FaBookmark className={"prodCardWish"}/>
    

    <div className='prodCardContent'>

    <h3 className='prodName'>{nameOfProduct}</h3>
    <h3 className='prodPrice'>${price}</h3>
    <h3 className='prodPrice'>{brand}</h3>
  
   </div>


    </div>

    </div>
  )
}

export default ProductCard

// <div className='displayStack'></div>
//          <div className='prodPrice'>${price}</div>
        
//    </div>
