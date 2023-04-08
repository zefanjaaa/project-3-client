import React from 'react'
import { CartContex } from '../context/cartContex'
import { useContext } from 'react';

function CheckOutPage() {

  const { items, getTotalCost, getTotalItems, deleteWholeCart, deleteCart } =
    useContext(CartContex);

  return (
    <div>
    <h1>Checkout Page</h1>
    
    
    
    
    </div>
  )
}

export default CheckOutPage