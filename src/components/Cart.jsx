import React from 'react'
import { Button } from 'react-bootstrap'
import { CartContex } from '../context/cartContex'
import { useContext } from 'react'


function Cart({ price, image, brand, nameOfProduct, _id }) {

   const cart = useContext(CartContex)
   
  //fix this


  return (
    <div>
    
    <h3>{nameOfProduct}</h3>

    {/*<p>{quantity} total</p>*/}

    {/*<p>${(quantity* _id.price).toFixed(2)}</p>*/}
    
    <Button variant='dark' size='sm' onClick={cart.deleteCart(_id)}>Remove</Button>
    <hr></hr>
    
    </div>
  )
}

export default Cart