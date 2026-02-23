import React from 'react'
import { useState } from 'react'
const SubscribeBtn = ({ toggle, setToggle }) => {
console.log(toggle.toggle,"toggle");
  return (
    
    <div className={`${(toggle)? " " : "hidden"}  flex justify-center`} >
<div className=' border border-gray-400 w-fit p-8  mt-6 absolute z-50 bg-gray-200'>
    <div className="flex justify-between relative mb-4">   
         <h1 className='text-2xl font-semibold '>Enter your Email:</h1>
    <p className='border p-2 px-3.5 rounded-full absolute -right-5 -top-5 text-white bg-black' onClick={()=>{setToggle(false)}}>X</p>
    </div>

    <input type="email" for="email" placeholder='jhoedoe123@gmail.com' className='border border-gray-500 w-full p-2 rounded-lg mb-2' />
    <button className='bg-black text-white font-semibold tracking-[2px] p-2 rounded-lg' onClick={()=>{setToggle(false)}} >Subscribe!</button>
</div>


    </div>
  )
}

export default SubscribeBtn