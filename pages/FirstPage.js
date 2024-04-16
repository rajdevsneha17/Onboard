import { useState } from "react"
import React from 'react'
import Logo from "../assets/TLogo.png" 
import {  useNavigate } from "react-router-dom";

const FirstPage = () => {
    const navigate=useNavigate();

    const [fullname, setName] = useState('');
    const [lastname, setlastname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setcPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    
    const handleSubmit = () => {
        if (!fullname || !lastname || !password || !confirmPassword) {
          setShowError(true);
        } else {
          setShowError(false);
          if (password !== confirmPassword) {
            setPasswordsMatch(false);
            return; // Stop submission if passwords don't match
          }

          setPasswordsMatch(true);
          
          if (!isChecked) {
            
            alert("Please agree to our terms and policy.");}
        
        
        else{
           
            navigate('/introduction')
        }}
      };
    
  

  return (
    <div className='w-12/12 h-screen'>
      
      <div className='flex justify-center items-center flex-col border-b-1 border-gray-200 '>
        <img src={Logo} className=' h-6 w-32 m-2' ></img>
        <div className='w-full h-[2px] bg-slate-300 '></div>
      </div>

      
       <div className='flex justify-center items-center '>
       <div className=' flex flex-col justify-center items-center  '>
         <h1 className='text-3xl font-serif m-6'>Get started with Teachable</h1>
         <p className='text-gray-500 ml-5 '>Join more than 100,000 creators who've sold over <span className='font-bold text-black'> $ 1 billion</span> in courses and coaching</p>
         <form >
         <div className='flex flex-col w-5/6 m-8   '>
            
                <label className='text-gray-500 '>Full Name</label>
                <input type='text' 
                className='border-2 h-10 p-2 rounded-md border-gray-300  outline-none focus:border-gray-600'
                name="fullname"
                
                onChange={(e) => setName(e.target.value)}
                style={{ border: showError && !fullname ? '1px solid red' : '' }}
                ></input>
                 {showError && !fullname && (
                 <p style={{ color: 'red' }}>This field is required.</p>
                 )}


                <label className='text-gray-500  mt-2'>Last Name</label>
                <input type='text' 
                className='border-2 h-10 p-2 rounded-md border-gray-300 outline-none focus:border-gray-600'
                name="lastname"
                onChange={(e) => setlastname(e.target.value)}
                style={{ border: showError && !lastname ? '1px solid red' : '' }}
                ></input>
                  {showError && !lastname && (
                  <p style={{ color: 'red' }}>This field is required.</p>
                  )}

                <label className='text-gray-500 mt-2'>Password</label>
                <input type='password' 
                className='border-2 h-10 p-2 rounded-md border-gray-300 outline-none focus:border-gray-600'
                name="password"
                
                onChange={(e) => setPassword(e.target.value)}
                style={{ border: showError && (!password || !passwordsMatch) ? '1px solid red' : '' }}
               
                ></input>

                  {showError && !password && (
                <p style={{ color: 'red' }}>This field is required.</p>
                 )}
                
                <label className='text-gray-500 mt-2'>Confirm Password</label>
                <input type='password' 
                className='border-2 h-10 p-2 rounded-md border-gray-300 outline-none focus:border-gray-600'
                name="confirmPassword"
                onChange={(e) => setcPassword(e.target.value)}
                style={{ border: showError && (!confirmPassword || !passwordsMatch) ? '1px solid red' : '' }}
                
                >
                
                </input>
                  {showError && !confirmPassword && (
                  <p style={{ color: 'red' }}>This field is required.</p>
                   )}
                    {!passwordsMatch && (
                   <p style={{ color: 'red' }}>Password and Confirm Password must match.</p>
                    )}
                <label className='flex mt-5'>
                <input type='checkbox'
                 checked={isChecked}
                 onChange={handleCheckboxChange}
                 class="appearcance-none w-4 h-4 checked:accent-gray-100 checked:border-2 border-2 border-black rounded-sm"
                 
                />
                <p className='text-xs pl-2'> I agree to the <a href="#"  className='font-bold text-xs border-b-black border-b-2'>Terms of Use</a> and <a href="#"  className='font-bold text-xs border-b-2 border-b-black outline-none'>Privacy Policy</a></p>
                </label>
               
                 

                
         </div>
         </form>
         <button type='submit' onClick={handleSubmit}  className='w-32 h-12 bg-black text-white rounded-md'> Create Account</button>
        <p className='text-sm mt-5'>Already have an account? <span className='border-b-black border-b-2'>Log in</span></p>

        </div>
       </div>
      
    </div>
  )

  }
export default FirstPage
