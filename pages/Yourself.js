import React from 'react'
import SelectGroup from "../components/SelectGroup"
import CheckboxPage from './CheckboxPage';
import { IoMdHelpCircle } from "react-icons/io";
import Slider from '../components/Slider';


const Yourself = () => {
    // Array for first five components
     const selectOptionsArray = [
        {
          label: 'Do you currently run an online business?',
          options: [
            { value: 'No just Exploring!', label: 'No just Exploring!' },
            { value: 'option1.2', label: 'Option 1.2 Text' },
            { value: 'option1.3', label: 'Option 1.3 Text' },
          ],
          
        },
        {
            label: 'I primarily identified as ',
            options: [
              { value: 'Freelancer or conultant (project-based work)', label: 'Freelancer or conultant (project-based work)' },
              { value: 'option1.2', label: 'Option 1.2 Text' },
              { value: 'option1.3', label: 'Option 1.3 Text' },
            ],
            
          },
        {
          label: 'Are you already teaching or offering content online?',
          options: [
            { value: 'No,I am just getting started sharing my knowledge', label: 'No,I am just getting started sharing my knowledge' },
            { value: 'option2.2', label: 'Option 2.2 Text' },
            { value: 'option2.3', label: 'Option 2.3 Text' },
          ],
         
        },

        {
            label: 'How big is your current audience (email list,social media followers,subscribers,etc.)?',
            options: [
              { value: '1-1000 people', label: '1-1000 people' },
              { value: 'option2.2', label: 'Option 2.2 Text' },
              { value: 'option2.3', label: 'Option 2.3 Text' },
            ],
           
          },

          {
            label: 'Which topic is more relevant to your business or content',
            options: [
              { value: 'Photo & video', label: 'Photo & video' },
              { value: 'option2.2', label: 'Option 2.2 Text' },
              { value: 'option2.3', label: 'Option 2.3 Text' },
            ],
           
          },

          {
            label: 'Approximately how much money do you make charging for your knowledge today (in courses,conslulting,books,speaking,etc.)? We ask this so that we can provide you with relevant resources for the size and stage of your business',
            options: [
              { value: 'I prefer not to answer', label:'I prefer not to answer' },
              { value: 'option2.2', label: 'Option 2.2 Text' },
              { value: 'option2.3', label: 'Option 2.3 Text' },
            ],
           
          },
       
      ];
    //  Array for Sixth Select statement after checkbox
      const selectOptionsArray1 = [
        {
          label: 'How much content or training material (video,worksheets,downloads,etc.) have you already prepared ',
          options: [
            { value: 'No! I am just getting started', label: 'No! I am just getting started' },
            { value: 'option1.2', label: 'Option 1.2 Text' },
            { value: 'option1.3', label: 'Option 1.3 Text' },
          ],
          
        },
    ]
  return (
   <div className='w-full flex flex-col  '>
    {/* Slider Component */}
    <div><Slider></Slider></div>
    {/* Second Component after Slider */}
    <div className='lg:w-full flex justify-center items-center'> 
    <div className='w-5/12 flex-col mx-5'>
    
    <div className='w-full '>
    <h1 className='mt-10 lg:text-4xl text-xl font-bold flex justify-start items-start -ml-2'>Tell us more about Yourself</h1>
    <p className='mt-5 text-xs lg:text-[1rem]'>Your answer will help us build an experience to match your needs </p>
    </div>
    <div className='w-full  '>
    {/* Select Component */}
    <SelectGroup selectOptionsArray={selectOptionsArray} />
    
    </div>
    <div>
    {/* Checkbox Component */}
    <CheckboxPage></CheckboxPage>
    </div>
    <SelectGroup selectOptionsArray={selectOptionsArray1} />
<div>


</div>
<div className='flex lg:justify-end justify-center items-center lg:ml-[20rem] ml-2'><button type='submit' className=' rounded-md border-gray-500 border-2 w-32 h-10  text-xl font-bold mt-16 mb-10 '>Next</button></div>
   </div>
   
    <div className='lg:flex lg:left-72 lg:bottom-44 relative '><button type='submit' className=' rounded-md bg-black shadow-2xl text-white border-gray-500 border-2 xl:w-28 xl:h-10 xl:text-xl w-16 h-5 text-sm ml-1'>Help</button>
    <IoMdHelpCircle className='flex absolute xl:top-3 xl:left-3 top-1.5 left-2 xl:h-5 xl:w-5 h-3 w-3 bg-white rounded-full ' />
     
     </div>
   
  </div>

</div>
  )
}

export default Yourself
