import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";



const RoutesController = () => {
  return (
    <Routes>
    {/* // Front-end */}
    <Route index element={<Index/>} />



      {/* Testing Route */}
      {/* <Route path="/view" element={} /> */}

    </Routes>
  );
};

export default RoutesController;
