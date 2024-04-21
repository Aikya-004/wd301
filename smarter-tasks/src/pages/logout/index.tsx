import  { useEffect } from "react";
import { Navigate } from "react-router-dom"
import React from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("userData")
  }, [])
  
  return <Navigate to="/signin" />;
}

export default Logout;