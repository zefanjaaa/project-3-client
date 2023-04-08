import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function Admin({ children }) {
  const { isLoading, administrator } = useContext(AuthContext);

  if (isLoading) return <p>ITS LOAAAADING</p>;

  if (administrator) {
    return children;
  
  } else {
    return <Navigate to="/" />;
   
  }
}

export default Admin;
