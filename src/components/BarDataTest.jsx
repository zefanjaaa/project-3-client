import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";





const BarDataTest = [

   {
     title: "Home",
     path: "/",
     icon: <AiIcons.AiFillHome/>,
     className: "nav-text"
   }, 

   {
      title: " All Products",
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
    title: "Home Décor",
    path: "/product/homegoods",
    icon: <AiIcons.AiFillAppstore />,
    className: "nav-text"
  },
  {
    title: "Sale",
    path: "/product/sale",
    icon: <AiIcons.AiFillAppstore />,
    className: "nav-text"
    },
    
    {
      title: "YOU.",
      path: "/wishlist",
      icon: <AiIcons.AiFillAppstore/>,
      className: "nav-textYOU"
    }, 
  
  
  {
    title: "Contact Us",
    path: '/contactpage',
    icon: <IoIcons.IoIosAlbums/>,
    className: "nav-text"
    },
  
    
]

export default BarDataTest

