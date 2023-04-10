import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import RemoveFromWishlist from "./RemoveFromWishlist";


function RenderWishlist() {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useContext(AuthContext);
  const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";

  useEffect(() => {
    axios
      .get(`${API_URL}/product/product/${user._id}/wishlist`)
      .then((response) => {
        const wishlistItems = response.data.wishlist.map((itemId) => {
          return axios.get(`${API_URL}/product/products/${itemId}`);
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
  }, [user._id,API_URL]);

  return (
    <div>
      <h1>This is your wishlist</h1>
      {wishlist.map((item) => (
        <div key={item._id}>
           <h2>{item.nameOfProduct}</h2>
              <p>{item.price}</p>
          <img src={item.image} alt="wishlistpic" />
          <RemoveFromWishlist  productId={item._id}/>
        </div>
      ))}
    </div>
  );
}

export default RenderWishlist;
