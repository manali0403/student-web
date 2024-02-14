import React from "react";
import { Tab } from "@headlessui/react";
import { category, plans } from "../utils/Constant";
import { TbBrandSupernova } from "react-icons/tb";

const Plans = () => {
  return (
    <>
      <div className="mt-28">
        <h1 className=" flex justify-center font-semibold capitalize text-[1.8rem] text-white">
          plans
        </h1>
        <Tab.Group>
          <Tab.List className="flex items-center justify-center gap-6 rounded-xl p-3 mt-5">
            {plans?.map((element, index) => {
              return (
                <>
                  <Tab
                    key={index}
                    className="bg-[#7557f7] w-40 rounded-lg capitalize px-4 py-2.5  text-[1.2rem] text-white leading-5 ring-white/60 ring-offset-1  focus:outline-none focus:ring-2"
                  >
                    {element?.title}
                  </Tab>
                </>
              );
            })}
          </Tab.List>

          <Tab.Panels className="mt-6">
            {plans?.map((element, index) => (
              <Tab.Panel
                key={element.title}
                className="flex justify-center flex-wrap gap-12 rounded-md py-7"
              >
                {element?.card?.map((plan, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="min-w-[395px]  flex flex-col justify-center items-center px-8 py-6 rounded-[12px] duration-300 hover:shadow-[0px_2px_28px_-6px_#e9e9e9] bg-[#2e2d2d]"
                  >
                    <h1 className="text-[2.5rem] text-[#eee] font-semibold">
                      <span className="mr-1"> &#8377;</span>
                      {plan.amount}
                    </h1>
                    <h2 className="text-[1.5rem] text-[#eee] uppercase mt-2">
                      {plan.days}
                    </h2>
                    <hr className="w-full h-0.5 mt-6 bg-gradient-to-r from-transparent via-white to-transparent border-0 " />
                    <ul className="text-[#fff] rounded-md  mt-3 py-8 px-6">
                      {plan.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-[1rem] mb-2 p-2 flex gap-3 "
                        >
                          <span className="flex items-center">
                            {/* Assuming TbBrandSupernova is an icon or component */}
                            <TbBrandSupernova className="" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="text-white text-[1rem] w-full rounded-md mt-2 p-3 bg-[#131313]">
                      Get Started
                    </button>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default Plans;
