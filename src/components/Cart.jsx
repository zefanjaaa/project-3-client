
// import { Button } from 'react-bootstrap'
// import { CartContex } from '../context/cartContex'
import React,{useContext, useState} from 'react'
import axios from 'axios'
import * as FaIcons from "react-icons/fa";
import { AuthContext } from '../context/auth.context';


function Cart({ price, image, brand, nameOfProduct, _id, productId }) {

  //  const {cart} = useContext(CartContex)
   
   const [addToCart, setAddToCart] = useState(false);
    
  const {user} = useContext(AuthContext)

 
  const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";

    const handleAddToCart = () => {
        
        setAddToCart(true)
        axios.post(`${API_URL}/product/product/${user._id}/cart`, { productId:productId })
            .then(response => {
                console.log('product added to cart', response.data)
                setAddToCart(false)
            })
            .catch((error) => {
                console.log('we can not add a product to your cart', error)
                setAddToCart (false)
        })
    }
  return (

      <div onClick={handleAddToCart} > 
         
      </div>
  )
}
   

  



export default Cart