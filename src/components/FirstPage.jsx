import React from "react";
import background from "../assets/images/background.jpg";
import { info_list } from "../utils/Constant";

const HeroSection = () => {
  return (
    <div className="my-10 h-auto  px-2 py-8">
      <div className="w-full lg:max-w-[1200px]  bg-gradient-to-tr from-[#A3B3BB] to-[#46555C] mx-auto mt-[6rem] flex justify-center gap-8 py-14 px-10 rounded-[10px]">
        {/* content box */}
        <div className=" flex justify-center flex-col ">
          <h1 className="text-[1.8rem] font-semibold tracking-normal   text-[#ccc] mb-6 mt-2">
            Student Management NextlevelBot Website 
          </h1>
          <ul className="my-2">
            {info_list.map((info) => (
              <li
                className="text-white text-[0.9rem]  mb-2 hover:text-slate-200 cursor-pointer font-[500px]"
                key={info}>
                👉 {info}
              </li>
            ))}
          </ul>
          <button className="mt-2 bg-[#7367F0] text-white px-4 py-2 rounded-lg border-none outline-none">
            Register Now
          </button>
        </div >
        {/* homebanner box */}
        <div className="hidden lg:block ">
          <img src={background} alt="background" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
