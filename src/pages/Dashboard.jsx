import React from "react";
import Navbar from "../components/Navbar";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div class="row">
        <div class="col">
          <Sidebar />
        </div>
        <div class="col-6">
          
        </div>
        <div class="col">
          <RightBar />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
