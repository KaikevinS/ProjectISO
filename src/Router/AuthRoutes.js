import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavbarLayout from "../layout/NavbarLayout";
import { getToken } from "../Utils/Common";

const AuthRoutes = () => {
  return (
    <>
      {getToken() ? (
        <NavbarLayout>
          <Outlet />
        </NavbarLayout>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default AuthRoutes;
