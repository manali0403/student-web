import React from "react";
import { DashboardHeader } from "./DashboardHeader";

export const APIContent = () => {
  return (
    <div className="w-full h-auto md:h-[95%]  px-8 md:px-0">
      <DashboardHeader pageTitle={"Api Credentials"} />

      <div
        className="flex flex-col md:w-[98%] my-4 h-[750px] px-2 overflow-y-auto
       border mx-auto border-gray-500 rounded-md shadow-lg"></div>
    </div>
  );
};
