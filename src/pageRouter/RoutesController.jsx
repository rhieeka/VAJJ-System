import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";



const RoutesController = () => {
  return (
    <Routes>

      {/* Testing Route */}
      <Route path="/view" element={<Index/>} />

    </Routes>
  );
};

export default RoutesController;
