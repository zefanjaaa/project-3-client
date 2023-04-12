import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import RemoveFromWishlist from "./RemoveFromWishlist";
import "../style/RenderWishlist.css"
import Card from "react-bootstrap/Card";
import { Link,NavLink } from "react-router-dom";

function RenderWishlist() {
  const [wishlist, setWishlist] = useState([]);

  const { user } = useContext(AuthContext);
  const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";


  const getWishlist = () => {
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
  }
  useEffect(() => {
    getWishlist()
  }, [user._id]);

  return (
    <div className="container">
          <h1>This is your wishlist</h1>
  
    <div className="cardplacement">
  
      {wishlist.map((item) => (
        <div key={item._id} >
          <Card className="cardbody" border="dark" style={{width:'15rem'}}>
           <NavLink to={`/product/${item._id}`}>
              <Card.Img className="pic" whileHover={{ scale: 1.0 }} variant="top" src={item.image} alt="wishlist-pic" />
              </NavLink>
            {/* <img src={item.image} alt="wishlistpic"  style={{ width: "15rem" }}/>/ */}
            <Card.Text>
              <NavLink  to={`/product/${item._id}`} >
                <p class='text-black'>{item.nameOfProduct}</p>
                </NavLink>
            </Card.Text>
            <Card.Text>
              <p>{item.price}</p>
              </Card.Text>
            <RemoveFromWishlist productId={item._id} getWishlist={getWishlist} />
            </Card>
        </div>
      ))}
  </div>
    </div>
  );
}

export default RenderWishlist;
