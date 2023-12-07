"use client"
import React from 'react'
import a from '../assets/a.jpg'
import imageCoding from '../assets/code.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
      <div name="home" className='flex h-screen w-full bg-gradient-to-b from-slate-900 to-slate-400 text-white pb-60'>
          <div className='flex flex-col justify-between items-center max-w-screen-lg mx-auto  md:flex-row md:mt-20'>
              <div className='  h-full mt-40'>
          <h1><span className='text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                   from-blue-100 to-blue-800'>Hello I'm {""}</span>
            <br/>
           <TypeAnimation
                sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Miloud amri',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Web Developper',
                        1000,
                        'Front-End Developper',
                        1000,
                        'Back-End Developper',
                        1000
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: '2em', display: 'inline-block', fontWeight:'bold' }}
                        repeat={Infinity}
         />
          
          
          </h1>
                  <p className='text-gray-100 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Non facere quod itaque consequatur id aliquam,
                      tenetur magnam placeat quae odit fugit at repudiandae aspernatur
                      doloribus praesentium nulla cumque animi voluptates!</p>
              
                      <div>
                        <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from bg-green-200 to-green-800 rounded-md  font-bold'>Portfolio<span className='group-hover:rotate-90'><MdKeyboardArrowRight size={27} className='ml-2'/></span></Link>
                      </div>
              </div>
              <div className='md:ml-40 '>
                  <img src={imageCoding} alt="img" className='rounded-3xl mx-auto w-2/3 md:w-full '  />
              </div>
          </div>
    </div>
  )
}

export default Home