import React, { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { apiArray, apiCards } from "../utils/Constant";
import { AiOutlineSearch } from "react-icons/ai";

export const APIContent = () => {
  const [showApis, setShowApis] = useState(false);

  return (
    <div className="w-full h-auto md:h-[95%]  px-8 md:px-0">
      <DashboardHeader pageTitle={"Api Credentials"} />

      <div
        className="flex flex-col md:w-[98%] my-4 h-[750px] px-2 overflow-y-auto
       border mx-auto border-gray-500 rounded-md shadow-lg">
        {/* top - container */}
        <div className="flex gap-4 w-full items-start">
          {/* left  */}
          <div className="w-[15rem] border-r border-r-gray-400 py-2 px-2">
            <button
              className={`text-white w-full bg-blue-600 px-8 rounded-lg border-none cursor-pointer outline-none py-2`}
              onClick={() => setShowApis(true)}>
              ADD API
            </button>
          </div>

          {/* right */}
          <div className="border-b border-b-gray-400 w-[82%] flex justify-between items-center">
            <div className="flex gap-2 w-[200px] py-4 px-2">
              <AiOutlineSearch size={24} className="text-white" />
              <input
                type="text"
                placeholder="search API"
                className="bg-transparent w-full placeholder:text-lg placeholder:capitalize focus:outline-none border-none text-white"
              />
            </div>
            <div>
              <button className="text-white  bg-blue-600 px-10 uppercase rounded-lg border-none cursor-pointer outline-none py-2">
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* api section */}
        <div className="flex gap-2 w-full">
          <div className="w-[15rem] py-2 px-2 border-r border-r-gray-400">
            <p className="text-slate-50 text-lg tracking-[1px] my-2">FILTER</p>

            {/* api scroller */}
            <div className="flex flex-col gap-2 my-4">
              {apiArray.map((api) => (
                <div className="flex items-center gap-2" key={api.title}>
                  <input
                    className="p-2 cursor-pointer"
                    type="checkbox"
                    id={api.title}
                    value={api.title}
                  />
                  <label
                    htmlFor={api.title}
                    className="text-gray-500 font-medium tracking-[1px] cursor-pointer">
                    {api.title}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Add API section */}

          {showApis && (
            <div className="flex gap-2 flex-wrap w-[82%] py-4 px-2 h-[500px] items-start justify-start">
              {apiCards.map((card) => (
                <div className="h-[200px] w-[250px] rounded-lg shadow-md flex flex-col gap-10 items-center py-4 px-2 bg-[#eee]">
                  <img src={card.img} alt="api" height={100} width={150} />

                  <p className="border-gray-400 border text-lg capitalize px-8 py-2 rounded-lg cursor-pointer">
                    Add Api
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
