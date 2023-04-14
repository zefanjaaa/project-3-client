import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import RemoveFromWishlist from "./RemoveFromWishlist";
import "../style/RenderWishlist.css";
import { NavLink } from "react-router-dom";

function RenderWishlist() {
  const [wishlist, setWishlist] = useState([]);

  const { user } = useContext(AuthContext);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

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
        const wishlistItems = itemResponses.map(
          (itemResponse) => itemResponse.data
        );
        setWishlist(wishlistItems);
      })
      .catch((error) => {
        console.log("there is an error rendering the wishlist", error);
      });
  };
  useEffect(() => {
    getWishlist();
  }, [user._id]);

  return (
    <div>
    <br></br>
      <h3>YOUR WISHLIST</h3>

      <div>
        {wishlist.map((item) => (
          <div key={item._id}>
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="wishlist-content">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-1">
                              <NavLink to={`/product/${item._id}`}>
                                <img
                                  src={item.image}
                                  className="w-100"
                                  alt="wishlist-pic"
                                />
                              </NavLink>
                            </div>

                            <div className="col-md-6">
                              
                                <h6>{item.nameOfProduct}</h6>
                              
                            </div>

                            <div className="col-md-2">
                              
                                <h6>${item.price}</h6>
                              
                            </div>

                            <div className="col-md-1">
                              

                              <RemoveFromWishlist
                                productId={item._id}
                                getWishlist={getWishlist}
                              />
                            </div>

                            <div className="col-md-2">
                            <NavLink to={`/product/${item._id}`}>
                             <button className="btn btn-dark btn-sm wishlist-remove-btn"
                             
                               
                               >VIEW</button>
                               </NavLink>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RenderWishlist;
