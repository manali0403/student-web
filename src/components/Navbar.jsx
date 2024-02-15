import React, { useState } from "react";
import { menu } from "../utils/Constant";
import { AiOutlineCaretDown } from "react-icons/ai";
import Logo from "../assets/images/nextlogofull_white.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center fixed z-10  gap-10  bg-gradient-to-r from-[#484848d4] via-[#484848] to-[#484848d4]  py-3 px-10 text-xl font-sans  text-white ">
        <img src={Logo} alt="" className="w-[15%] h-[100%]" />

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
          <button className="p-1 rounded-full px-8 py-1 mx-3 focus:outline-none focus:border-gray-600 bg-[#7367F0] text-[#fff]">
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
