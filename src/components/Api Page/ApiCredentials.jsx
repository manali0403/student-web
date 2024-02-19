import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { APIContent } from "./APIContent";
import AddApi from "./AddApi";

export const ApiCredentials = () => {
  const [isAddApi, setIsAppApi] = useState(false);



  return (
    <div className="flex w-full bg-[#181822]">
      <div className="h-auto md:h-[100vh] border border-r border-[#3d3d3d] px-0 md:px-2 pt-3">
        <Sidebar />
      </div>

      <div className="h-[100vh] w-full overflow-auto flex-2 px-0 md:px-2 pt-3">
        <APIContent setIsAppApi={setIsAppApi} />
      </div>

      {
        isAddApi ? <AddApi setIsAppApi={setIsAppApi} /> : null
      }
    </div>
  );
};
