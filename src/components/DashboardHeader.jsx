import React from "react";
import { FaRegBell } from "react-icons/fa";
import { LuArrowDownSquare } from "react-icons/lu";

export const DashboardHeader = ({ pageTitle }) => {
  return (
    <div className="bg-[#181822] w-full  py-3 px-5 border-b border-b-slate-500 mb-4">
      <div className="flex  items-center gap-4 sm:gap-0 justify-between">
        <h1 className="sm:text-[2rem] text-[#eee] text-start">{pageTitle}</h1>
        <div className="flex items-center justify-end gap-28">
          <div className="flex gap-3">
            <span className="relative bg-[#DF5978] text-[#fff] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center">
              SH
              <span className="w-[10px] h-[10px] rounded-full bg-[#28C76F] absolute right-0 bottom-0 border"></span>
            </span>
            <div className="flex flex-col items-start font-semibold">
              <span className="text-[0.9rem] text-[#5E5E68]">
                shivani_parteki
              </span>
              <span className="text-[0.7rem] text-[#5E5E68]">ID : 41529</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#5E5E68]">
            <span className="text-[1.3rem]">
              <LuArrowDownSquare />
            </span>
            <span className="text-[1.3rem]">
              <FaRegBell />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
