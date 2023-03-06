import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";

import Login from "../pages/Login";
import SignUp from "../pages/Signup";

const RoutesController = () => {
  return (
    <Routes>
      {/* Testing Route */}
      <Route path="/view" element={<Dashboard/>} /> 

      {/* Front-end Route */}
      <Route exact path="/" element={<Login />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
    </Routes>
  );
};

export default RoutesController;
