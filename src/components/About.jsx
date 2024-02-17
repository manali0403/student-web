import React from 'react'
import { aboutData } from '../utils/Constant';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


AOS.init();

const About = () => {
  return (
    <div className="h-[350px] w-full max-w-[1200px] mt-[6rem] mx-auto text-center">
      <h2 className="text-[#7367F0] text-[2.5rem] font-semibold capitalize">
        Reality of kredKonnect Algo Universe
      </h2>

      {/* kredkonnect analysis */}
      <div className="flex justify-center items-center gap-12 mt-12  ">
        {aboutData.map((data) => {
          return (
            <div data-aos={data?.aosType}
              data-aos-duration={data?.aosDuration}
              className='h-auto w-[350px]'>
              <div
                className=" bg-[#101419] hover:shadow-[0px_6px_24px_-12px_#ccc] hover:scale-105 duration-200 py-4 text-white  px-4 rounded-lg flex flex-col gap-2"
                key={data.number}>
                <h3 className="text-[2rem] font-bold">{data.number}</h3>
                <p className="text-[1.15rem]">{data.count}</p>
                <span className="text-[0.8rem] text-gray-300">{data.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default About