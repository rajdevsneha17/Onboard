import React from 'react'
import { IoMdHelpCircle } from "react-icons/io";
const Help = () => {
  return (
    <div className='xl:flex lg:flex flex-col hidden'>
      
    <div className=' relative  '><button type='submit' className='lg:-mt-[45rem] lg:ml-80 -mt-20 rounded-md  bg-black shadow-[rgba(0,_0,_0,_0.4)_0px_10px_30px] text-white border-gray-500 border-2 xl:w-28 xl:h-10 xl:text-xl lg:w-16 lg:h-5 text-sm    '>Help</button>
     <IoMdHelpCircle className='xl:flex lg:flex absolute xl:left-[21rem] lg:left-[20.3rem] xl:h-4 xl:w-4 lg:h-2.5 lg:w-2.5 lg:-mt-4 xl:-mt-6 bg-white rounded-full hidden  ' />
    </div>
    </div>
  )
}

export default Help
