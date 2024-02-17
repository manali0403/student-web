import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { cardData } from '../utils/Constant';


export function New() {
  const columns = 2; // Number of columns
  const [cardDataState, setCardDataState] = useState(cardData);

  const handleViewMore = (index) => {
    setCardDataState((prevCardData) => {
      const updatedCardData = [...prevCardData];
      updatedCardData[index].expanded = true;
      return updatedCardData;
    });
  };

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (


    <div className=" grid grid-cols-3 grid-rows-2 gap-6 p-10">
      {cardDataState?.map((card, index) => (
        <div key={index} className="bg-[#fff] rounded-[8px] py-4 px-2">
          <div className='flex flex-col justify-center  px-8 py-5'>
            <h1 className="mb-2 text-black text-[1.35rem] font-semibold">
              {card.title}
            </h1>
            <p className={`text-[#000] text-[0.9rem] text-justify mt-3`}>
              {card.expanded ? card.content : truncate(card.content, 250)}
              {!card.expanded && card.content.length > 100 && (
                <button
                  onClick={() => handleViewMore(index)}
                  className="text-blue-500 underline cursor-pointer ml-2"
                >
                  View More
                </button>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
