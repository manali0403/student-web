import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { apiCards, randomNumbers, socialLinks } from "../utils/Constant";
import { DashboardHeader } from "./DashboardHeader";

const MainContent = () => {
  return (
    <div className="w-full h-auto md:h-[95%]  px-8 md:px-0">
      <DashboardHeader pageTitle={"Dashboard"} />

      <div className="flex flex-col md:flex-row gap-3 py-4">
        <div className="w-full md:w-[70%]">
          <div className="message  rounded-[8px] p-1.5  duration-300 shadow-[0px_3px_18px_-12px_#e9e9e9] bg-[#22222f]">
            <p className="flex items-center gap-2   text-[#ccc]  text-[15px] py-2 px-3">
              <IoIosInformationCircleOutline /> Good news! MT5 and MT4 Both
              wroking Properly..
            </p>
          </div>

          <div className="message  bg-gradient-to-r from-[#A37BCA] from-10% via-[#A093E2] via-30% to-[#C27EB8] to-90% grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-[5px] py-6 px-6 mt-5">
            {randomNumbers?.map((element, index) => {
              return (
                <>
                  <div className="flex items-center gap-3">
                    <span className="bg-[#FCEAEA] p-4 rounded-full text-[1.4rem] text-[#EA5455]">
                      {element?.icon}
                    </span>
                    <div className="flex flex-col h-full">
                      <span className="text-[1.3rem] text-[#5E5873] font-semibold">
                        0
                      </span>
                      <span className="text-[0.9rem] text-[#eee] ">
                        {element?.planName}
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {/* API Cards */}
          <div className="api-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  rounded-[5px] mt-8">
            {apiCards?.map((element, index) => {
              return (
                <>
                  <div className="card relative w-full bg-[#fff] rounded-[3px] flex flex-col justify-center flex-1 py-8 px-4">
                    <div className="text-center">
                      <img className="w-[90%]" src={element?.img} alt="" />
                      <span>{element?.apiName}</span>
                    </div>

                    <span className="absolute right-[-11px] top-[-11px] shadow-[0px_0px_8px_0px_#7367F0] text-[0.8rem] bg-[#7367F0] text-[#fff] font-semibold px-2.5 py-0.5 rounded-full">
                      0 Api
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full md:w-[30%] h-full ">
          <div className="links-card w-full  bg-gradient-to-br from-[#22222f] from-60% to-[#4E3245]   rounded-[5px] py-4 px-5">
            <div className="flex flex-col gap-6   my-3 text-[#ccc] capitalize">
              {socialLinks?.map((element, index) => {
                return (
                  <>
                    <button
                      className={`flex items-center gap-2 w-full font-semibold capitalize ${element?.customStyle} px-5 py-1.5 rounded-[5px] hover:-translate-y-1 hover:scale-105  duration-300 `}>
                      <span>{element?.icon}</span> <span>{element?.name}</span>
                    </button>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
