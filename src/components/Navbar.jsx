import React from 'react'
import { Routes,Route, NavLink } from 'react-router-dom'

import SubscribeBtn from './SubscribeBtn'
import { useState } from 'react'
import '../index.css'

const Navbar = () => {

  const [toggle,setToggle]=useState(false);
  return (
    <div className='mx-6'>
    <div className=' w-full flex justify-between py-6 items-center border-b '>
        <div className="logo rounded-3xl ">
       <NavLink to={`/`} > 

       <img src="../../public/image.png" alt=" none" className='h-15 rounded-4xl'/>
       </NavLink>
        </div>


        <div className="links flex justify-between gap-12 text-xl ">
          
              <NavLink to={`/`} ><div className="nav_link  bg-gray-300  p-4 py-2 rounded-sm">Home</div> </NavLink>


              <NavLink to={`/newblog`}>
            <div className="nav_link  bg-gray-300  p-4 py-2 rounded-sm">Blog</div>
            </NavLink>
            
            <div className="nav_link bg-black text-white  p-4 py-2 rounded-sm" onClick={()=>{setToggle(true)}}>Subscribe  <span className='text-xl ml-2 '>✉</span></div>
        </div>
    </div>
    <SubscribeBtn toggle={toggle} setToggle={setToggle} />
    </div>
  )
}

export default Navbar