import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../style/SingleProdPage.css";
import { CartContex } from "../context/cartContex";
import { Col, Form, Row, Button } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import AddtoWishlist from "../components/AddtoWishlist";



const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";

function SingleProductPage({userId}) {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  
  const cart = useContext(CartContex);

  const ProductQuantity = cart.getProductQuantity(product?._id);

  const getProduct = () => {
    const token = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/product/products/${productId}`, {
        headers: { Authorization: `Bearer${token}` },
      })
      .then((res) => {
        const oneProduct = res.data;
        setProduct(oneProduct);
      })
      .catch((error) => {
        console.log("THERE IS AN ERROR", error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="Page">
      {product && (
        <div className="details">
          <img src={product.image} alt="pic-product" className="BigImg" />
          <div />

          <div className="box">
            <div className="row">
              <h2>{product.nameOfProduct}</h2>
              <h3>{product.brand} </h3>

              <span>${product.price}</span>
            </div>

            <p>Size:{product.size}</p>
            <p>Category: {product.categoryOfProduct}</p>
            <p>Details: {product.ProductDetails}</p>

            {ProductQuantity > 0 ? (
              <div>
                <Form as={Row}>
                  <Form.Label column="true" sm="6">
                    In Cart:{ProductQuantity}
                  </Form.Label>
                  <Col sm="6">
                    <Button
                      variant="dark"
                      sm="6"
                      onClick={() => cart.addOneToCart(product)}
                      className="mx-2"
                    >
                      +
                    </Button>
                    <Button
                      variant="dark"
                      sm="6"
                      onClick={() => cart.removeOneFromCart(product)}
                      className="mx-2"
                    >
                      -
                    </Button>
                  </Col>
                </Form>
                <Button
                  variant="dark"
                  onClick={() => cart.deleteCart(product)}
                  className="my-2"
                >
                  Remove from Cart
                </Button>
              </div>
            ) : (
              //else
              <BsIcons.BsBagFill
                variant="dark"
                onClick={() => cart.addOneToCart(product)}
              >
                Add to Cart
              </BsIcons.BsBagFill>
            )}
            <br></br>
<AddtoWishlist  productId={productId} userId={userId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProductPage;
