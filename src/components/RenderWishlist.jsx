// import React,{useContext,useEffect,useState} from 'react'
// import axios from 'axios';
// import { AuthContext } from '../context/auth.context';

// function RenderWishlist() {
//     const [wishlist, setWishlist] = useState([])
    
//     const {user} = useContext(AuthContext)

//     const API = "http://localhost:5005";

//     const getWishList = () => {
       
//         axios.get(`${API}/product/product/${user._id}/wishlist`
//             )
//             .then((response) => {
//                 console.log(response.data.wishlist)
//                 setWishlist(response.data.wishlist)
//             })
          
//         .catch((error) => {console.log('there is an error rendering the wishlist',error)})
//     }

//     useEffect(() => {
// getWishList()
//     },[])
    

//   return (
//       <div>
//           <h1>This is your wishlist</h1>
//           {wishlist.map((item) => (
//         <div>
//           {item.nameOfProduct && <h2>{item.nameOfProduct}</h2>}
//           {/* {item.price} */}
//         </div>
//       ))}
//       </div>
//   )
// }

// export default RenderWishlist

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function RenderWishlist() {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useContext(AuthContext);
  const API = "http://localhost:5005";

  useEffect(() => {
    axios
      .get(`${API}/product/product/${user._id}/wishlist`)
      .then((response) => {
        const wishlistItems = response.data.wishlist.map((itemId) => {
          return axios.get(`${API}/product/products/${itemId}`);
        });
        return Promise.all(wishlistItems);
      })
      .then((itemResponses) => {
        const wishlistItems = itemResponses.map((itemResponse) => itemResponse.data);
        setWishlist(wishlistItems);
      })
      .catch((error) => {
        console.log("there is an error rendering the wishlist", error);
      });
  }, [user._id]);

  return (
    <div>
      <h1>This is your wishlist</h1>
      {wishlist.map((item) => (
        <div key={item._id}>
           <h2>{item.nameOfProduct}</h2>
              <p>{item.price}</p>
              <img src={item.image} alt="wishlistpic" />
        </div>
      ))}
    </div>
  );
}

export default RenderWishlist;
