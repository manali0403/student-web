import React, { useState } from "react";
import { DashboardHeader } from "../DashboardHeader";
import { ManualOrdersTabs } from "./ManualOrdersTabs";
import { ManualPositionsTabs } from "./ManualPositionsTabs";

export const ManualTradeContent = () => {
  return (
    <div className="w-full h-[900px] overflow-y-auto custom-scrollbar md:h-full px-8 md:px-0 py-2 my-2">
      <DashboardHeader pageTitle={"Manual Orders  |"} />

      {/* orders form and tabs */}
      <ManualOrdersTabs tab={"Order Type One"} />

      {/* manual positions tabs */}
      <ManualPositionsTabs />
    </div>
  );
};
