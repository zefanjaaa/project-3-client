import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function RemoveFromWishlist({ productId }) {
    const [removeData, setRemoveData] = useState([]);
    const [wishlist, setWishlist] = useState([])

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const findToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/auth/verify`, {
        headers: { Authorization: `Bearer ${findToken}` },
      })

      .then((response) => {
        const data = response.data.wishlist;
        setRemoveData(data);
      })
        .catch((error) => {
          console.log(`there is an error getting the wishlist data`,error)
      })
  }, []);

  const remove = (productId) => {
      axios.delete(`product/${user._id}/wishlist/${productId}`)
          .then((response) => {
              console.log(response.data)
              setWishlist(wishlist.filter((item) => item !== productId))
          })
          .catch((error) => {
          console.log(`there is an error remove the product from wishlist`,error)
      })
  };

  return (
    <div>
     <button onClick={() => remove(productId)}>Remove from wishlist</button>
    </div>
  );
}

export default RemoveFromWishlist;
