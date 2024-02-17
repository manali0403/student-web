import React from 'react'
import { aboutData } from '../utils/Constant';

const About = () => {
  return (
    <div className="h-[350px] w-full max-w-[1200px] mx-auto text-center">
      <h2 className="text-white text-[26px] leading-8 tracking-wide font-medium">
        Reality of kredKonnect Algo Universe
      </h2>

      {/* kredkonnect analysis */}
      <div className="flex justify-center items-center gap-12 mt-12">
        {aboutData.map((data) => {
          return (
            <div
              className="h-auto w-[300px] shadow-lg bg-[#101419] hover:shadow-2xl cursor-pointer py-4 text-white px-4 rounded-lg flex flex-col gap-2"
              key={data.number}>
              <h3 className="text-[2rem] font-bold">{data.number}</h3>
              <p className="text-[1.15rem]">{data.count}</p>
              <span className="text-[0.8rem] text-gray-300">{data.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default About