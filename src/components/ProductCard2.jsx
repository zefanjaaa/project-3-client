import React from 'react'
import "../style/ProductCard.css"


function ProductCard2(props) {


  return (
      <div>
          <p><h3> Name: </h3>{props.products.nameOfProduct}</p>
          <p> <b> Brand: </b></p>{props.products.brand}
          
          <p> <b>Price:</b> {props.products.price}</p>
          <p> <b>Size:</b>{props.products.size}</p>
          <p> <b>Quantity:</b>{props.products.quantity}</p>
          <p> <b>Product details:</b>{props.products.ProductDetails}</p>
          <img src={props.products.image} alt='pic-product' className='prodCardPic'></img>

    </div>
  )
}

export default ProductCard2