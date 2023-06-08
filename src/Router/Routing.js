import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from ".././Pages/Login";
import Register from ".././Pages/Register";
import Dashboard from "../Pages/Dashboard";
import AddEmployee from "../Pages/Employee/AddEmployee";
import DetailEmployee from "../Pages/Employee/DetailEmployee";
import Employee from "../Pages/Employee/Employee";
import Onboarding from "../Pages/Onboarding";
import NonAuthRoute from "./NonAuthRoute";
import AuthRoutes from "./AuthRoutes";
import CompanyPage from "../Pages/Company";
import AttendancePage from "../Pages/Attendance";
import DetailAttendance from "../Pages/Attendance/DetailAttendance";
import { getToken } from "../Utils/Common";
// import Navbar from "../Components/Navbar";

function Routing() {
  return (
    <Routes>
      <Route element={<NonAuthRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<AuthRoutes />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/employee-detail/:id" element={<DetailEmployee />} />
        <Route exact path="/add-employee" element={<AddEmployee />} />
        <Route exact path="/company" element={<CompanyPage />} />
        <Route exact path="/attendance" element={<AttendancePage />} />
        <Route exact path="/detail-attendance/:id" element={<DetailAttendance />} />
      </Route>
      <Route path="*" element={<Navigate to={getToken() ? "/" : "login"} />} />
    </Routes>
  );
}
export default Routing;
