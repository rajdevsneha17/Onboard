import React from 'react'
import SelectGroup from "../components/SelectGroup"
import CheckboxPage from './CheckboxPage';

import Slider from '../components/Slider';
import Help from '../components/Help';


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
    <div className='w-full flex flex-col justify-center items-center relative '>
        
        <div className='flex w-full'><Slider></Slider></div>
       <div className='w-2/6 ml-[35rem] -mt-20 absolute '>
        <div className=''><Help></Help>
        </div></div>
   <div className='w-4/6 sm:w-3/6 flex justify-center items-center  '>
    <div className="w-full flex justify-center items-center flex-col">
    
    <div className='w-full '>
    <h1 className='mt-10 lg:text-4xl text-2xl font-bold flex justify-start items-start -ml-2'>Tell us more about Yourself</h1>
    <p className='mt-5 text-xs lg:text-[1rem]'>Your answer will help us build an experience to match your needs </p>
    </div>
    <div className='w-full '>
    {/* Select Component */}
    <SelectGroup selectOptionsArray={selectOptionsArray} />
    
    </div>
    <div>
    {/* Checkbox Component */}
    <CheckboxPage></CheckboxPage>
    </div>
    
<div className=''>
<SelectGroup selectOptionsArray={selectOptionsArray1} />

</div>
<div className='flex lg:justify-end justify-center items-center lg:ml-[20rem] ml-2'><button type='submit' className=' rounded-md border-gray-500 border-2 w-32 h-10  text-xl font-bold mt-16 mb-10 '>Next</button>

</div>

   </div>
  
     
     </div>
    
  </div>
  


  )}


export default Yourself
