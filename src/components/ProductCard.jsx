import React from 'react'

function ProductCard({price, image, brand, nameOfProduct}) {

 return (
    <div>

    <img src={image} alt="pic-product"/>

    <p><b>Brand : </b>{brand}</p>
    <p><b>Image : {nameOfProduct}</b></p>
    <p><b>Price : {price}</b></p>
    
    </div>
  )
}

export default ProductCard