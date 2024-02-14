import React from "react";
import HomeBanner from "../assets/images/homeBanner.png";
import { info_list } from "../utils/Constant";

const HeroSection = () => {
  return (
    <div className="my-10 h-auto lg:h-[820px] bg-[#101419] px-2 py-4">
      <div className="w-full lg:max-w-[1400px] mx-auto mt-20 flex justify-center gap-8">
        {/* content box */}
        <div>
          <h1 className="text-[32px] font-medium tracking-normal leading-[36.4px] text-left text-white mb-4 mt-2">
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
