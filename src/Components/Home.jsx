"use client"
import React from 'react'
import a from '../assets/a.jpg'
import imageCoding from '../assets/code.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation';
import { motion,spring } from "framer-motion"

const variant = {
  initialed: {
    x: "-200%",
    opacity: 0,
    
  },
  animated:{
    x: 0,
    opacity: 1,
    transition: {
      duration:1
    }
  }
}
const variantImage = {
  initialed: {
    y: "-200%",
    opacity: 0,
    
  },
  animated:{
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: spring,
      stiffnes: 1000,
      
    }
  }
}

const Home = () => {
  return (
      <div name="home" className='flex h-screen w-full text-white pb-60'>
          <motion.div   className='flex flex-col justify-between items-center max-w-screen-lg mx-auto  md:flex-row md:mt-20'>
              <motion.div variants={variant} initial="initialed" animate="animated" className='  h-full mt-40'>
          <motion.h1 variants={variant}><span className='text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r
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
          
          
          </motion.h1>
                  <p className='text-gray-100 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Non facere quod itaque consequatur id aliquam,
                      tenetur magnam placeat quae odit fugit at repudiandae aspernatur
                      doloribus praesentium nulla cumque animi voluptates!</p>
              
                      <div>
                        <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-b from bg-blue-400 to-blue-800 rounded-md  font-bold'>Portfolio<span className='group-hover:rotate-90'><MdKeyboardArrowRight size={27} className='ml-2'/></span></Link>
                      </div>
              </motion.div>
              <motion.div variants={variantImage} initial="initialed" animate="animated" className='md:ml-40 '>
                  <img src={imageCoding} alt="img" className='rounded-3xl mx-auto w-2/3 md:w-full '  />
              </motion.div>
          </motion.div>
    </div>
  )
}

export default Home