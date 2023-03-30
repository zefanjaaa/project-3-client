import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { BarDataTest } from "./BarDataTest";
import "../style/NavTest.css"
import { IconContext } from "react-icons";

function NavbarTest() {

const [sideB, setSideB] = useState(false)

const showSidebar = () => setSideB(!sideB)



  return (
    <div>
    <IconContext.Provider value={{color: '#fff'}}>

      <div className="navbar">
        <Link to="/" className="menubars">
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
      </div>

      <nav className={sideB ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
           <Link to="/" className="menu-bars">
              <AiIcons.AiOutlineClose/>
           </Link>
          </li>
          {BarDataTest.map((item,index) =>{
            return(

               <li key={index} className={item.className}>
               <Link to={item.path}>
               
               <span>{item.title}</span>
               </Link>
               </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </div>
  );
}

export default NavbarTest;
