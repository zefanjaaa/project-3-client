// import path from 'path';
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
      title: "Art",
      path: "/product/art",
      icon: <AiIcons.AiFillAppstore/>,
      className: "nav-text"
  }, 
  {
    title: "Homegoods",
    path: "/product/homegoods",
    icon: <AiIcons.AiFillAppstore />,
    className: "nav-text"
    },
    {
      title: "CheckOut",
      path: "/checkout",
      icon: <AiIcons.AiFillAppstore/>,
      className: "nav-text"
    }, 

    {
      title: "Wishlist",
      path: "/wishlist",
      icon: <AiIcons.AiFillAppstore/>,
      className: "nav-text"
    }, 
  
  
  {
    title: "Contact",
    path: '/contactpage',
    icon: <IoIcons.IoIosAlbums/>,
    className: "nav-text"
    },
  
    {
      title: "Add Product",
      path: '/product/add',
      icon: <IoIcons.IoIosAlbums/>,
      className: "nav-text"
      }
    

]