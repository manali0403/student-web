import React, { useState } from "react";
import { menu } from "../utils/Constant";
import { AiOutlineCaretDown } from "react-icons/ai";
import Logo from "../assets/images/nextlogofull_white.png";

const Navbar = () => {
  return (
    <div className="bg-[#1A2B33] fixed z-10 w-full">
      <div className="w-full max-w-[1200px] flex justify-between items-center mx-auto z-10 left-[6%] rounded-[10px] mt-5 gap-10  bg-[#46555C]  py-2 px-8  text-[1rem] font-sans  text-white ">
        <h1 className=" text-wrap">Student Digital School</h1>
        <ul className=" flex justify-center gap-1 lg:gap-2">
          {menu?.map((element, index) => {
            return (
              <>
                <div key={index} className="  dropdown-menu relative group ">
                  <li className="capitalize text-[0.9rem] hover:text-[#ccc] p-4  cursor-pointer flex items-center gap-1  ">
                    <span>{element?.item}</span>
                    {/* <AiOutlineCaretDown /> */}
                  </li>

                  <ul className="absolute z-50 left-0  hidden group-hover:block duration-300 rounded-md shadow-[0px_6px_22px_-10px_#686868]  bg-[#F9F9F9]">
                    {element?.dropdown?.map((dropdown, index) => {
                      return (
                        <li
                          key={index}
                          className={`${element?.style} capitalize w-36 cursor-pointer px-3 py-2 text-[#000]  hover:rounded-md hover:bg-[#eee] ease-in-out duration-150`}
                        >
                          {dropdown}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </ul>

        <div className="p-3  hidden lg:block">
          <button className=" rounded-full px-6 py-[0.2rem] focus:outline-none focus:border-gray-600 bg-[#7367F0] text-[#fff] text-[0.8rem]">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
