import React from 'react'
import Checkbox from '../components/Checkbox'
import { useState } from 'react';
const CheckboxPage = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    const options=['Create an Online Course', 'Create a coaching program', 'Create a digital download', 'Create a community or forum ', 'Create a pre-sell', 'Something else(please tell us more)']
  return (
    <div>
       <div className='flex flex-col lg:w-full mt-5'>
        <p className='lg:text-lg xl:text-lg md:text-lg sm:text-md text-xs font-bold'>What are you hoping to do first on Teachable?(Select up to three to get started asquickly as possible) </p>
        <Checkbox
         checked={isChecked} onChange={handleCheckboxChange} 
         options={options}
        ></Checkbox>
        </div>
    </div>
  )
}

export default CheckboxPage
