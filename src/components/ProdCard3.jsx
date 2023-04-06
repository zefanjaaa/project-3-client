import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/ProdCard3.css"
// import { color, motion } from "framer-motion";
import React from 'react'
import { CartContex } from "../context/cartContex";
import { useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';

function ProdCard3({ price, image, brand, nameOfProduct,_id }) {

   const API_URL = "http://localhost:3000"
  
   


return (

    <Card style={{ width: '15rem'}}  key={nameOfProduct}>
      <Card.Img className='pic' whileHover={{ scale: 0.9 }} variant="top" src={image} alt="pic-product"/>

      <Card.Body className='cardBody'>
        <Card.Title className='BrandText'>{brand}</Card.Title>
        <Card.Text>
        <Link to={`${API_URL}/product/${_id}`}>
        <h3 className="prodNameText">{nameOfProduct}</h3>
        </Link>
        <Card.Text className="prodPriceText">${price}</Card.Text>

        <FaIcons.FaHeart></FaIcons.FaHeart>

        </Card.Text>

        

        
      </Card.Body>
    </Card>
  );
}

export default ProdCard3;