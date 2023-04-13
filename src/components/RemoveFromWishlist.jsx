import React, { useContext } from "react";
import axios from "axios";

import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function RemoveFromWishlist({productId,getWishlist}) {
 
  const { user } = useContext(AuthContext);

    const remove = () => {
        const token = localStorage.getItem('authToken')
        
      axios.delete(`${API_URL}/product/${user._id}/wishlist/${productId}`,{headers: {Authorization:`Bearer ${token}`}} )
          .then((response) => {
        
              getWishlist()
              alert('The product is removed from your wishlist!')
          })
          .catch((error) => {
          console.log(`there is an error remove the product from wishlist`,error)
      })
  };

  return (
    <div>
     <button class='btn btn-dark btn-sm wishlist-remove-btn' onClick={() => remove(productId)}>REMOVE</button>
    </div>
  );
}

export default RemoveFromWishlist;
