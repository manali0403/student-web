import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { apiArray, apiCards } from "../../utils/Constant";
import { DashboardHeader } from "../DashboardHeader";

export const APIContent = ({ setIsAppApi }) => {
  const [showApis, setShowApis] = useState(false);

  return (
    <div className="w-full h-auto md:h-[95%]  px-8 md:px-0">
      <DashboardHeader pageTitle={"Api Credentials"} />

      <div
        className="flex flex-col md:w-[98%] my-4 h-[750px] overflow-y-auto
       border mx-auto border-gray-500 rounded-md shadow-lg">
        {/* top - container */}
        <div className="flex w-full items-start">
          {/* left  */}


          {/* right */}
          <div className="border-b border-b-gray-400 w-full flex justify-between items-center px-4">
            <div className="flex gap-2.5 w-full max-w-[400px] border border-gray-500 rounded-[10px] py-2.5 px-4 m-4">
              <AiOutlineSearch size={24} className="text-gray-400" />
              <input
                type="text"
                placeholder="search API"
                className="bg-transparent w-full placeholder:text-[0.9rem] placeholder:capitalize focus:outline-none border-none text-gray-400"
              />
            </div>
            <div>
              <button className="text-white text-[0.9rem]  bg-[#7367f0]  capitalize rounded-lg border-none cursor-pointer outline-none px-8 py-1.5">
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* api section */}
        <div className="flex gap-2 w-full">
          <div className="w-[15rem] py-2 px-2 border-r border-r-gray-400">
            <div className="py-2 px-2">
              <button
                className={`text-white w-full bg-[#7367f0] px-8 rounded-lg border-none cursor-pointer outline-none py-2`}
                onClick={() => setShowApis(true)}>
                ADD API
              </button>
            </div>

            <div className="px-4">
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
          </div>

          {/* Add API section */}

          {showApis && (
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 w-[82%] py-4 px-2 h-[500px] items-start justify-start">
              {apiCards.map((card) => (
                <div className="h-full w-full rounded-lg shadow-md flex flex-col gap-5 items-center py-4 px-2 bg-[#eee]">
                  <img src={card.img} alt="api" height={100} width={150} />

                  <button onClick={() => setIsAppApi(true)} className="border-gray-400 border text-[clamp(0.8rem,1vw,1.2rem)] capitalize bg-[#ccc] font-semibold px-4 py-2 rounded-lg cursor-pointer">
                    Add API
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
