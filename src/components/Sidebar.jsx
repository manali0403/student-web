import React, { useState } from "react";
import { sideBarMenu } from "../utils/Constant";
import { GoHome } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [dropdownIndex, setdropdownIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = (index) => {
    setdropdownIndex(dropdownIndex === index ? null : index);
  };

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="desktop-sidebar hidden md:block">
        <div className="custom-scrollbar w-[16rem] overflow-y-auto h-auto md:h-[95%]  bg-gradient-to-tr from-[#22222f] from-30% to-[#4E3245]">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="menu">
            {sideBarMenu?.map((element, index) => (
              <div key={index}>
                <div className="title mt-4 mb-1 ml-4 text-[#5E5E68] font-semibold cursor-pointer ">
                  {element?.title}
                </div>

                <ul>
                  {element?.items?.map((item, idx) => (
                    <li key={idx} className="flex flex-col  ">
                      <div
                        onClick={() => toggleAccordion(idx)}
                        className={`flex items-center justify-between text-[#ccc] py-2 px-4 text-[1rem] pl-5 duration-200 hover:bg-[#191720] cursor-pointer mx-2 rounded-[10px]`}>
                        <div className="flex items-center gap-2.5">
                          <GoHome /> {item?.itemName}
                        </div>
                        {item?.subMenu && (
                          <>
                            {activeIndex === idx ? (
                              <IoIosArrowDown className="font-semibold " />
                            ) : (
                              <RiArrowRightSLine className="font-semibold" />
                            )}
                          </>
                        )}
                      </div>

                      {activeIndex === idx && item?.subMenu && (
                        <ul>
                          {item?.subMenu?.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="flex items-center gap-2.5 py-1.5 px-4 text-[1.1rem] text-[#ccc] pl-8 duration-200">
                              <GoHome /> {subItem?.subItemName}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mobile-sidebar md:hidden">
        <button onClick={handleToggleSidebar} className="sidebar-toggle-button">
          {isSidebarOpen ? (
            <AiOutlineClose size={25} className="text-white" />
          ) : (
            <AiOutlineMenu size={25} className="text-white" />
          )}
        </button>
        <div
          className={`sidebar-overlay z-20 ${isSidebarOpen ? "active" : ""}`}>
          <div className="custom-scrollbar py-6 w-[16rem] overflow-y-auto h-full md:h-[95%]  bg-gradient-to-tr from-[#22222f] from-30% to-[#4E3245]">
            <div className="logo">
              <img src="" alt="" />
            </div>
            <div className="menu">
              {sideBarMenu?.map((element, index) => (
                <div key={index}>
                  <div className="title mt-4 mb-1 ml-4 text-[#5E5E68] font-semibold ">
                    {element?.title}
                  </div>

                  <ul>
                    {element?.items?.map((item, idx) => (
                      <li key={idx} className="flex flex-col  ">
                        <div
                          onClick={() => toggleAccordion(idx)}
                          className={`flex items-center justify-between text-[#ccc] py-2 px-4 text-[1rem] pl-5 duration-200 hover:bg-[#191720] mx-2 rounded-[10px]`}>
                          <div className="flex items-center gap-2.5">
                            <GoHome /> {item?.itemName}
                          </div>
                          {item?.subMenu && (
                            <>
                              {activeIndex === idx ? (
                                <IoIosArrowDown className="font-semibold " />
                              ) : (
                                <RiArrowRightSLine className="font-semibold" />
                              )}
                            </>
                          )}
                        </div>

                        {activeIndex === idx && item?.subMenu && (
                          <ul>
                            {item?.subMenu?.map((subItem, subIndex) => (
                              <li
                                key={subIndex}
                                className="flex items-center gap-2.5 py-1.5 px-4 text-[1.1rem] text-[#ccc] pl-8 duration-200">
                                <GoHome /> {subItem?.subItemName}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
