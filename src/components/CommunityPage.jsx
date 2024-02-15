import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import { apps } from '../utils/Constant'


const CommunityPage = () => {
  return (
    <div className='max-w-[1200px] w-full mx-auto    py-10 mt-8'>
      <h1 className='capitalize flex justify-center text-[#BEB4B7] text-[2.5rem]'>
        join our community
      </h1>

      <div className='flex justify-center items-center gap-6 flex-wrap mt-[3rem] px-[8rem]'>

        {
          apps?.map((element, index) => {
            return (
              <>
                <div className="flex flex-col justify-center items-center px-8 mt-6 ">
                  <a href={element?.hyperLinks}
                    target="_blank"
                    className={`${element?.customStyle} border-2 w-[60px] h-[60px] rounded-full flex justify-center items-center
          youtube-item mb-2 `} rel="noreferrer">
                    <span className='text-[#fff] text-[1.6rem]'>{element?.icon}</span>
                  </a>

                  <h2 className='capitalize text-[1rem] text-[#BEB4B7] '> {element?.name} </h2>
                </div>
              </>
            )
          })
        }
      </div>


    </div>
  )
}

export default CommunityPage