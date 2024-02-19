import React, { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { orderTypeOne, orderTypeTwo } from "../utils/Constant";

export const ManualTradeContent = () => {
  const [currentTab, setCurrentTab] = useState("Order Type One");

  return (
    <div className="w-full h-auto md:h-[95%] px-8 md:px-0 py-2 my-2">
      <DashboardHeader pageTitle={"Manual Orders  |"} />

      {/* orders form and tabs */}
      <div className="h-full 2xl:h-[450px] w-[98%] mx-auto my-10 bg-slate-50 rounded-lg shadow-md">
        {/* tabs */}
        <div className="flex h-[50px] w-full gap-2 justify-between mb-3">
          <div
            className={`flex justify-center items-center w-[50%] cursor-pointer text-blue-500 ${
              currentTab === "Order Type One"
                ? "border-b-2 border-b-blue-500"
                : "border-none"
            }`}
            onClick={() => setCurrentTab("Order Type One")}>
            <p className=" capitalize text-blue-500 text-sm">Order Type one</p>
          </div>
          <div
            className={`flex justify-center items-center w-[50%] cursor-pointer ${
              currentTab === "Order Type Two"
                ? "border-b-2 border-b-blue-500"
                : "border-none"
            }`}
            onClick={() => setCurrentTab("Order Type Two")}>
            <p className=" capitalize text-blue-500 text-sm">Order Type Two</p>
          </div>
        </div>

        <div className="h-[300px] flex flex-col items-center gap-12 my-2 w-full px-8 py-4">
          <form className="flex flex-wrap gap-5">
            {currentTab === "Order Type One"
              ? orderTypeOne.map((inputObj, index) => (
                  <div key={index} className={inputObj.style}>
                    <label className="text-black mb-2 text-sm">
                      {inputObj.label}
                    </label>
                    {inputObj.input}
                  </div>
                ))
              : orderTypeTwo.map((inputObj, index) => (
                  <div key={index} className={inputObj.style}>
                    <label className="text-black mb-2 text-sm">
                      {inputObj.label}
                    </label>
                    {inputObj.input}
                  </div>
                ))}
          </form>
          <button className="text-white bg-blue-500 px-6 rounded-lg border-none cursor-pointer outline-none py-2">
            save
          </button>
        </div>
      </div>
    </div>
  );
};
