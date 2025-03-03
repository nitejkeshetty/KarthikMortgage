import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";

const NavBar = () => {
  const [nav,setNav] =useState(false)

  const handleNav = ()=>{
    setNav(!nav)
    console.log(nav)
  }

  return (
    <>
    <div className='flex justify-between w-screen  fixed top-0 md:px-20 bg-white'>
        <div className='flex items-center '>
            <img src={logo} alt="" className='w-20 md:w-24 h-auto'/>
            <p className='font-bold text-md md:text-xl'>Karthik Bilakanti <br /> Mortgage Advisor</p>
        </div>
        <div>
          <ul className=' justify-between hidden md:flex '>
            <li className='m-3 p-3 min-w-max font-bold'>About</li>
            <li className='m-3 p-3 min-w-max font-bold'>Services</li>
            <li className='m-3 p-3 min-w-max font-bold'>Contact Us</li>
          </ul>
          <div className='block md:hidden'>
            {nav?(
              <IoCloseCircleSharp className='text-2xl m-5' onClick={handleNav} />
            )
            :
            (
              <GiHamburgerMenu className='text-2xl m-5' onClick={handleNav}/>
            )}
          </div>
        </div>
    </div>
          <div className={nav?'bg-white w-[70%] fixed top-0 left-0 z-10 text- h-screen md:hidden block transition-all duration-300 ease-in-out':'hidden'}>
            <div className='bg-[#ffaf5a] w-full  border h-screen relative'> 
              <div className='flex items-center bg-white'>
                <img src={logo} alt="" className='w-20 h-auto'/>
                <p className='font-bold text-sm'>Karthik Bilakanti <br /> Mortgage Advisor</p>
              </div>
              <ul>
                <li className='m-3 p-3 min-w-max font-bold'>About</li>
                <li className='m-3 p-3 min-w-max font-bold'>Services</li>
                <li className='m-3 p-3 min-w-max font-bold'>Contact Us</li>              
              </ul>
            </div>
          </div>
  </>
  )
}

export default NavBar
