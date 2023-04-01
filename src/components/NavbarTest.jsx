import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { BarDataTest } from "./BarDataTest";
import "../style/NavTest.css";
import { IconContext } from "react-icons";

function NavbarTest() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  const [sideB, setSideB] = useState(false);

  const showSidebar = () => setSideB(!sideB);

  return (
    <div className="navAll">
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
          <AiIcons.AiOutlineLogout onClick={logOutUser} />

          <Link to="/wishlist">
            <AiIcons.AiOutlineUser />
          </Link>
          <Link to="/product/add">
            <button>add</button>
          </Link>
        </div>
      )}

      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
         
            <FaIcons.FaBars onClick={showSidebar} />
         
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
    </div>
  );
}

export default NavbarTest;
