import React from "react";
import HomeBanner from "../assets/images/homeBanner.png";
import { info_list } from "../utils/Constant";

const HeroSection = () => {
  return (
    <div className="my-10 h-auto lg:h-[820px]  px-2 py-8">
      <div className="w-full lg:max-w-[1200px] bg-[#eee] mx-auto mt-[6rem] flex justify-center gap-8">
        {/* content box */}
        <div>
          <h1 className="text-[32px] font-medium tracking-normal leading-[36.4px] text-left text-[#222] mb-4 mt-2">
            Boost your trading success with kredkonnect
          </h1>
          <ul className="my-2">
            {info_list.map((info) => (
              <li
                className="text-white text-[15px] mb-2 hover:text-slate-200 cursor-pointer font-[500px] leading-[25px]"
                key={info}>
                👉 {info}
              </li>
            ))}
          </ul>
          <button className="mt-2 bg-[#7367F0] text-white px-4 py-2 rounded-lg border-none outline-none">
            Register Now
          </button>
        </div>
        {/* homebanner box */}
        <div className="hidden lg:block">
          <img src={HomeBanner} alt="homebanner" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
