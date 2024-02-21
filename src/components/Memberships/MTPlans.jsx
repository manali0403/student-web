import React from 'react'
import { DashboardHeader } from '../DashboardHeader'
import { mt4AndMt5Plans } from '../../utils/Constant'

const MTPlans = () => {
  return (
    <div className="w-full h-auto md:h-[95%] px-8 md:px-0 py-2 my-2">
      <DashboardHeader pageTitle={"Checkout"} />

      <div className='flex gap-4'>
        <div className="w-[70%] h-[150px] rounded bg-[#fff] px-7 py-3.5">
          <h1 className='text-[1.25rem] font-medium text-[#5e5873]'>Invoice</h1>
        </div>

        <div className='w-[30%] rounded bg-[#fff] text-center py-5'>
          <div className="card-heading px-8">
            <p className='font-medium'>MT4 And MT5 Plans</p>
            <p className='text-[#aaa] mt-2'>NOTE :- THIS AMOUNT IS NOT REFUNDABLE PLEASE MAKE SURE BEFORE PURCHASE</p>
          </div>

          <ul className='my-3'>
            {
              mt4AndMt5Plans?.map((element, index) => {
                return (
                  <li className='px-4 mb-2'>
                    <div className='flex items-center justify-between border rounded-[8px] px-3 py-3.5'>
                      <div className='flex items-center gap-2'>
                        <input className='cursor-pointer' type={element?.inputType} name="" id="" />
                        <p className='text-[0.85rem] mb-[-3px]'>{element?.period}</p>
                      </div>

                      <div className="flex items-center gap-2 text-[0.85rem]">
                        <span className=' mb-[-3px]'>{element?.price}</span>
                        <span className='text-[#2BC871] text-[0.8rem] bg-[#E5F8ED] rounded-md font-semibold uppercase px-1.5'>{element?.offer}</span>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>

          <hr className='mt-8 mb-3' />

          <div className='text-left px-5'>
            <button className='border  bg-[#7367f0] mt-3 text-[0.9rem] text-[#eee] rounded-md px-5 py-2'>Place Order</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default MTPlans