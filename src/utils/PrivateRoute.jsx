import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Logout from "../Logout"; // Adjust the path as needed

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Logout />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
