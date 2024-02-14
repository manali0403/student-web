import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <div className="flex bg-[#181822]">
      <div className="h-auto md:h-[100vh] border border-r border-[#3d3d3d] px-0 md:px-2 pt-3">
        <Sidebar />
      </div>

      <div className="h-[100vh] overflow-auto flex-2 px-0 md:px-2 pt-3">
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
