import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavBar = () => {
    const [nav, Setnav] = useState(false);
  return (
      <div className='flex justify-between items-center w-full h-20 text-white fixed bg-transparent px-4'>
          <h1 className='text-5xl font-signature ml-2'>Miloud</h1>
          <ul className='hidden md:flex justify-between'>
        <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'><Link to="home" smooth duration={500}>home</Link></li>
              <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'><Link to="about" smooth duration={500}>about</Link></li>
              <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'><Link to="portfolio" smooth duration={500}>portfolio</Link></li>
              <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'><Link to="experience" smooth duration={500}>experience</Link></li>
              <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'><Link to="contact" smooth duration={500}>contact</Link></li>
              
          </ul>
          <div onClick={()=>{Setnav(!nav)}}  className='md:hidden cursor-pointer hover:text-slate-200 hover:scale-205 duration-200 z-10'>
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        {nav &&
          <ul className='flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-slate-900 to-slate-500 text-white'>
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl '><Link to="home" onClick={()=>{Setnav(false)}} smooth duration={500}>home</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl '><Link to="about"  onClick={()=>{Setnav(false)}} smooth duration={500}>about</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl '><Link to="portfolio"  onClick={()=>{Setnav(false)}} smooth duration={500}>portfolio</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl '><Link to="experience"  onClick={()=>{Setnav(false)}} smooth duration={500}>experience</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl '><Link to="contact"  onClick={()=>{Setnav(false)}}  smooth duration={500}>contact</Link></li> 
           
              
          </ul>}
          
    </div>
  )
}

export default NavBar;