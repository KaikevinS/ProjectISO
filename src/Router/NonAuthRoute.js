import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../Utils/Common";

export default function NonAuthRoute() {
  return !getToken() ? <Outlet /> : <Navigate to="/dashboard" />;
}
