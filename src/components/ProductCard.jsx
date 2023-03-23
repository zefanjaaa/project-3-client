import React from 'react'

function ProductCard({price, image, brand, nameOfProduct}) {

 return (
    <div>

    <img src={image} alt="pic-product"/>

    <p>{brand}</p>
    <p>{nameOfProduct}</p>
    <p>{price}</p>
    
    </div>
  )
}

export default ProductCard