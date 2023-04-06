import React,{useContext, useState} from 'react'
import axios from 'axios'
import * as FaIcons from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function AddtoWishlist({productId}) {
    const [add, setAdd] = useState(false);
    
const {user} = useContext(AuthContext)
   console.log(productId)
    const API = "http://localhost:5005";

    const handleAddToWishList = () => {
        
        setAdd(true)
        axios.post(`${API}/product/product/${user._id}/wishlist`, { productId:productId })
            .then(response => {
                console.log('product added to wishlist', response.data)
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