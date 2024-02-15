import React from "react";
import { footer } from "../utils/Constant";
// import logo from "../../assets/kredallino-logo.webp";


export const Footer = () => {
  return (
    <footer className="w-full px-4 py-4 xl:px-[70px] bg-[#464646] relative shadow-white shadow-xl mt-20">
      {/* logo container */}
      <div className="cursor-pointer py-12">
        {/* <img src={logo} height={120} width={120} alt="company-logo" /> */}
      </div>
      {/* message */}
      <div className="h-[70px] flex flex-col justify-center mb-10">
        <p className="text-[#ffffff] text-[20px] font-semibold  md:text-[24px] leading-[34px] xl:text-[28px] xl:leading-[42px] text-start">
          Transformative experiences by design <br />
          <span className="text-[#ffffff] font-medium">
            Let's work together
          </span>
        </p>
      </div>

      {/* contact details */}
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-6 xl:gap-0 xl:items-center mb-[40px]">
        <div>
          <h4 className="text-[#ffffff] text-[1rem] xl:text-[22px] xl:leading-[48px] tracking-normal text-left">
            support@kredallino.com
          </h4>
        </div>
        <div className="flex gap-3 items-center ">
          <h4 className="text-[#ffffff] text-[1rem] md:text-[1.1rem]">
            Locations
          </h4>
          <p className="text-[#ffffff] hover:text-[#000] cursor-pointer text-[1rem] md:text-[1.1rem] xl:text-[20px] xl:leading-[36px] text-left tracking-normal ">
            Nagpur, Maharashtra India
          </p>
        </div>
      </div>

      {/* sepearator */}
      <div className="w-full border-b border-b-slate-50 hidden lg:block"></div>

      {/* final bottom section */}
      <div className="flex flex-col md:flex-row lg:items-center lg:justify-center mt-6 mb-2">
        <div className="flex flex-col md:flex-row items-start lg:items-center gap-2">
          <p className="mr-2 text-[#ffffff] text-sm">
            @2024 all rights reserved by kredallino
          </p>

          {footer?.map((element, index) => {
            return (
              <>
                <a
                  href={element?.href}
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center text-sm text-[#ffffff]"
                >
                  {element?.name}{" "}
                  <span className="ml-1.5 md:ml-0.5 hidden md:block">|</span>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
