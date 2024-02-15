import React from 'react'
import { apiCards, links, socialLinks } from '../utils/Constant'

const AffiliateLink = () => {
  return (
    <div className='max-w-[1200px] w-full mx-auto  p-6 py-10 mt-8'>
      <h1 className='capitalize flex justify-center text-[#eee] text-[2.5rem]'> our affiliate links </h1>
      <div className="api-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  rounded-[5px] mt-[3rem]">
        {
          links?.map((element, index) => {
            return (
              <>
                <div className="card relative w-full bg-[#fff] rounded-[6px] flex flex-col justify-center flex-1 py-8 px-4">
                  <div className="text-center">
                    <img className="w-[90%]" src={element?.img} alt="" />
                    <span>{element?.apiName}</span>
                  </div>

                  {/* <span className="absolute right-[-11px] top-[-11px] shadow-[0px_0px_8px_0px_#7367F0] text-[0.8rem] bg-[#7367F0] text-[#fff] font-semibold px-2.5 py-0.5 rounded-full">0 Api</span> */}

                  <div className='flex justify-center mt-5'>
                    <button className=' flex justify-center items-center px-4 py-2
                     bg-[#222] capitalize text-[#eee] w-[50%] rounded-md hover:bg-[#666] '> click here </button>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default AffiliateLink