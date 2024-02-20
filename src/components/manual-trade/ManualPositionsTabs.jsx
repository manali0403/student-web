import React, { useState } from "react";

export const ManualPositionsTabs = () => {
  const [currentTab, setCurrentTab] = useState("Open Positions");
  return (
    <div className="h-full 2xl:h-[450px] w-[98%] mx-auto my-10 bg-slate-50 rounded-lg shadow-lg mb-4">
      {/* tabs */}
      <div className="flex h-[50px] w-full gap-2 justify-between mb-3">
        <div
          className={`flex justify-center items-center w-[50%] cursor-pointer text-blue-500 ${
            currentTab === "Open Positions"
              ? "border-b-2 border-b-blue-500"
              : "border-none"
          }`}
          onClick={() => setCurrentTab("Open Positions")}>
          <p className=" capitalize text-blue-500 text-sm">Open Positions</p>
        </div>
        <div
          className={`flex justify-center items-center w-[50%] cursor-pointer ${
            currentTab === "Close Positions"
              ? "border-b-2 border-b-blue-500"
              : "border-none"
          }`}
          onClick={() => setCurrentTab("Close Positions")}>
          <p className=" capitalize text-blue-500 text-sm">Close Positions</p>
        </div>
        <div
          className={`flex justify-center items-center w-[50%] cursor-pointer ${
            currentTab === "Order History"
              ? "border-b-2 border-b-blue-500"
              : "border-none"
          }`}
          onClick={() => setCurrentTab("Order History")}>
          <p className=" capitalize text-blue-500 text-sm">Order History</p>
        </div>
      </div>
    </div>
  );
};
