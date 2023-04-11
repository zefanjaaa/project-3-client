import React,{useContext, useState} from 'react'
import axios from 'axios'
import * as FaIcons from "react-icons/fa";

import { AuthContext } from '../context/auth.context';

function AddtoWishlist({productId}) {
    const [add, setAdd] = useState(false);
    
const {user} = useContext(AuthContext)
  
    const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";

    const handleAddToWishList = () => {
        
        setAdd(true)
        axios.post(`${API_URL}/product/product/${user._id}/wishlist`, { productId:productId })
            .then(response => {
          alert("The product is added to your wishlist!")
                setAdd(false)
              
            })
            .catch((error) => {
                console.log('there is an error adding a product to your wishlist', error)
                setAdd(false)
        })
    }
  return (
      <div>
             <FaIcons.FaHeart onClick={handleAddToWishList} /> 
         
    </div>
  )
}

export default AddtoWishlist