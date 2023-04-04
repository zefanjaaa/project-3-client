import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { BarDataTest } from "./BarDataTest";
import "../style/NavTest.css";
import { IconContext } from "react-icons";
import { Button, Modal } from "react-bootstrap";
import { CartContex } from "../context/cartContex";
import Cart from "./Cart";


function NavbarTest({ price, image, brand, nameOfProduct, quantity, _id }) {
  
  const { isLoggedIn, logOutUser,administrator } = useContext(AuthContext)

  const [sideB, setSideB] = useState(false);

  const showSidebar = () => setSideB(!sideB);
 
  //Cart Logic
  const [ show, setShow] = useState(false); // for cart Modal
  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);

  const cart = useContext(CartContex);

  const prodCount = cart.items.reduce((sum, prod)=> sum + prod.quantity, 0); //all broke here

  return (
    <div className="navAll">
    <IconContext.Provider value={{ color: "#fff" }}>
    <div className="navbar">
     
        <FaIcons.FaBars onClick={showSidebar} />
     
    
      {!isLoggedIn && (
        <div>
          <Link to="/auth/signup">
            <button> Create an account</button>
          </Link>
          <Link to="/auth/login">
            <button>Login</button>
          </Link>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <AiIcons.AiOutlineLogout onClick={logOutUser} className="IconLogOut"/>

          <Link to="/wishlist" className="IconPerson">
            <AiIcons.AiOutlineUser />
          </Link>

          {/*<Link to="/product/add">
            <button>add</button>
      </Link>*/}

          <BsIcons.BsBagFill className="IconBag" onClick={handleShowModal}>Cart ({prodCount} Items) </BsIcons.BsBagFill>

        </div>
      )}

      </div>

        <nav className={sideB ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              
                <AiIcons.AiOutlineClose />
            
            </li>
            {BarDataTest.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>

      
      <Modal  show={show} onHide={handleCloseModal}>
      
      <Modal.Header closeButton>
       
      <Modal.Title>Shopping Cart</Modal.Title>
       
      </Modal.Header>

      <Modal.Body>
            {prodCount > 0 ?
             <div>
                 <p>Items in Your Cart:</p>
                 {cart.items.map((currentProd, index) =>(
                  
                  <Cart key={index} quantity={currentProd.quantity} id={currentProd._id}></Cart> 
                  
                 ))}

                  

                {/*  <h1>Total Cost: {cart.}</h1> */}

               <Button variant="dark">
               Purchase items!
               </Button>

             </div>

            : 

               <h1>No Items In Your Cart</h1>
            }

           <h2> Shopping Cart </h2>

           </Modal.Body>
      
           </Modal>


          </div>
  );
}

export default NavbarTest;
