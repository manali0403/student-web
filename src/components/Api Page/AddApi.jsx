import React from 'react'
import { appApiDetails } from '../../utils/Constant'
import { RxCross2 } from "react-icons/rx";

const AddApi = ({ setIsAppApi }) => {
  return (
    <div className='w-full h-[100vh] flex fixed top-0 left-0 '>
      <div className='w-full h-[100vh] bg-[#cccccc66]' />


      <div className=' w-full max-w-[400px] h-[100vh] overflow-y-auto   bg-[#22222f]   py-6'>
        <div className="title-bar relative text-[#ccc]">
          <h1 className='flex justify-center text-[1rem]'>App API</h1>

          <RxCross2 className='absolute right-6 top-1' onClick={() => setIsAppApi(false)} />
        </div>

        <div className='flex flex-col gap-5 px-8 py-6 '>
          {
            appApiDetails?.map((element, index) => {
              return (
                <div key={index} className='flex flex-col text-[#ccc] gap-0.5'>
                  <label className='text-[0.9rem]' htmlFor={element?.title}>
                    {element?.title}
                  </label>
                  <input type={element?.inputType} placeholder={element?.title} id={element?.title} className='rounded-md text-[0.8rem] border border-[#606066] py-2 px-2 bg-[#4E3245]' />
                </div>
              )
            })
          }
          <div className='flex gap-3.5'>
            <button className='border  bg-[#7367f0] mt-3 text-[0.9rem] text-[#eee] rounded-md px-5 py-1.5'>Save 5paisa</button>
            <button className='border  bg-[#7367f0] mt-3 text-[0.9rem] text-[#eee] rounded-md px-5 py-1.5'>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddApi