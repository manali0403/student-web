import React, { useState } from "react";
import { AiOutlineDownload, AiOutlineSearch } from "react-icons/ai";
import { DynamicTable } from "./DynamicTable";

export const ManualPositionsTabs = () => {
  const [currentTab, setCurrentTab] = useState("Open Positions");

  return (
    <div className="h-full 2xl:h-[350px] w-[98%] mx-auto my-10 bg-slate-50 rounded-lg shadow-lg mb-4">
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

      {/* delete download and search header */}
      <div className="flex h-[45px] justify-between w-full gap-2 px-4 border-b my-1 py-2">
        <div className="flex items-center gap-5">
          <button className="bg-[#ea5455] text-white px-6 py-1 border-none outline-none rounded-lg">
            Delete
          </button>
          <button className="bg-[#f6f6f6] px-6 py-1 border-none outline-none rounded-lg">
            <AiOutlineDownload size={24} className="text-gray-500" />
          </button>
        </div>
        <div>
          <div className="flex items-center">
            <div className="py-1 px-2 border cursor-pointer">
              <AiOutlineSearch size={24} className="text-gray-500" />
            </div>

            <input
              type="text"
              placeholder="search"
              className="w-[350px] border focus:outline-none bg-transparent py-1 px-4 rounded-sm"
            />
          </div>
        </div>
      </div>

      {/* dynamic table depend on tabs */}
      <DynamicTable tab={currentTab} />
    </div>
  );
};
