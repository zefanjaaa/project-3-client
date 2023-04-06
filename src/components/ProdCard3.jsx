import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style/ProdCard3.css";
// import { color, motion } from "framer-motion";
import React from "react";
import { CartContex } from "../context/cartContex";
import { useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import { NavLink } from "react-router-dom";

function ProdCard3({ price, image, brand, nameOfProduct, _id }) {
  const API_URL = "http://localhost:3000";

  return (
    <Card border="light" style={{ width: "15rem" }} key={nameOfProduct} className="CardAll">
      <Card.Img className="pic" variant="top" src={image} alt="pic-product" />

      <Card.Body className="cardBody">
        <Card.Text>
          <Card.Text className="ProdName">
            <NavLink className="active" to={`${API_URL}/product/${_id}`}>
              <p>{nameOfProduct}</p>
            </NavLink>
          </Card.Text>

          <Card.Text>
            <p className="prodBrandText">{brand}</p>
          </Card.Text>

          <p className="prodPriceText">
            ${price} <FaIcons.FaHeart></FaIcons.FaHeart>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProdCard3;
