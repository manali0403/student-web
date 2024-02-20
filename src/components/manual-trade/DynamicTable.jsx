import React from "react";
import {
  closePositionsHeaders,
  openPositionsHeaders,
  orderHistoryHeaders,
} from "../../utils/positionsTable";

export const DynamicTable = ({ tab }) => {
  const getDynamicTabPositionData = (tab) => {
    if (tab === "Open Positions") {
      return openPositionsHeaders;
    } else if (tab === "Close Positions") {
      return closePositionsHeaders;
    } else {
      return orderHistoryHeaders;
    }
  };

  return (
    <table className="h-auto bg-white flex flex-col m-2">
      <thead className="h-[40px] bg-[#f3f2f7] flex items-center text-center justify-between">
        <th className="w-[90px] border-r text-[10px]">
          <input type="checkbox" />
        </th>
        {getDynamicTabPositionData(tab).map((header) => (
          <th
            key={header}
            className="border-r p-2 text-[10px] w-[150px] text-center text-black font-medium">
            {header}
          </th>
        ))}
      </thead>
      <tbody className="h-[100px] bg-white text-gray-500 flex text-sm items-center justify-between text-center">
        <td className="w-[90px] h-full border-r"></td>
        {getDynamicTabPositionData(tab).map((header) => (
          <td
            key={header}
            className="border-r w-[150px] p-2 text-[12px] text-center h-full"></td>
        ))}
      </tbody>
    </table>
  );
};
