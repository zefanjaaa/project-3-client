import React from 'react'

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";




export const BarDataTest = [

   {
     title: "Home",
     path: "/",
     icon: <AiIcons.AiFillHome/>,
     className: "nav-text"
   }, 

   {
      title: "Products",
      path: "/product/products",
      icon: <IoIcons.IoIosAlbums/>,
      className: "nav-text"
    }, 

    {
      title: "Sale",
      path: "/",
      icon: <AiIcons.AiFillAppstore/>,
      className: "nav-text"
    }, 
  

]