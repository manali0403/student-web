import React from 'react'
import { aboutData } from '../utils/Constant';

const About = () => {
  return (
    <div className="h-[300px] w-full text-center">
      <h2 className="text-white text-[26px] leading-8 tracking-wide font-medium">
        Reality of kredKonnect Algo Universe
      </h2>

      {/* kredkonnect analysis */}
      <div className="flex justify-center items-center gap-12 mt-12">
        {aboutData.map((data) => {
          return (
            <div
              className="h-auto w-[300px] shadow-lg bg-[#101419] hover:shadow-2xl cursor-pointer py-4 text-white px-4 rounded-lg"
              key={data.number}>
              <h3 className="text-[50px] font-bold my-2">{data.number}</h3>
              <p className="text-lg my-2">{data.count}</p>
              <span className="text-sm text-gray-300">{data.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default About