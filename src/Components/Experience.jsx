import React from 'react'
import html from '../assets/html.jpg'
import css from '../assets/css.png'
import js from '../assets/jjs.jpg'
import react from '../assets/react2.jpg'
import sql from '../assets/mssql.webp'
import bootstrap from '../assets/bootstrap.jpg'
import tailwind from '../assets/TailwindCSS.jpg'
import { motion } from "framer-motion"

const variants = {
  initialed: {
    scale: 0.9,
    opacity:0
  },
  animated: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      straggerChildren:2
    }
  }
}

const Experience = () => {
  return (
    <div name="experience" className='  w-full h-screen '>
      <div className='flex flex-col justify-center w-full h-full mx-auto p-4 max-w-screen-lg text-white'>
        <div className=' '>
          <h1 className='text-4xl font-bold inline border-b-4 border-gray-300 lg:ml-96'>Experience</h1>
          <p className='py-6  lg:ml-80'>These are the technologies I have worked with</p>
        </div>

        <motion.div variants={variants} initial="initialed" whileInView="animated" className=' w-full grid grid-cols-2 sm:grid-cols-3  gap-8 text-center py-8 px-12 sm:px-0'>
          <motion.div variants={variants} className=' shadow-md shadow-orange-700 rounded-lg hover:scale-105 duration-200 py-2'>
            <div className='rounded-lg' style={{
             background: `url(${html})`,
             backgroundSize: 'cover', 
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             height: '200px',
           }}></div>
            <p className='p-2 text-center text-white font-bold '>HTML</p>
          </motion.div>

          <motion.div variants={variants} className=' shadow-md shadow-blue-500 rounded-lg hover:scale-105 duration-200 py-2'>
            <div className='rounded-lg' style={{
             background: `url(${css})`,
             backgroundSize: 'cover', 
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             height: '200px',
           }}></div>
            <p className='p-2 text-center text-white font-bold '>CSS</p>
          </motion.div>

          
          <motion.div variants={variants} className=' shadow-md shadow-violet-600 rounded-lg hover:scale-105 duration-200 py-2'>
            <div className='rounded-lg' style={{
             background: `url(${bootstrap})`,
             backgroundSize: 'cover', 
             backgroundPosition: 'top',
             backgroundRepeat: 'no-repeat',
             height: '200px',
           }}></div>
            <p className='p-2 text-center text-white font-bold '>BOOTSTRAP</p>
          </motion.div>

          <motion.div variants={variants}  className=' shadow-md shadow-sky-400 rounded-lg hover:scale-105 duration-200 py-2'>
            <div className='rounded-lg' style={{
             background: `url(${react})`,
             backgroundSize: 'cover', 
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             height: '200px',
           }}></div>
            <p className='p-2 text-center text-white font-bold '>REACT</p>
          </motion.div>

          <motion.div variants={variants} className=' shadow-md shadow-yellow-500 rounded-lg hover:scale-105 duration-200 py-2'>
            <div className='rounded-lg' style={{
             background: `url(${js})`,
             backgroundSize: 'cover', 
             backgroundPosition: 'bottom',
             backgroundRepeat: 'no-repeat',
             height: '200px',
           }}></div>
            <p className='p-2 text-center text-white font-bold '>JAVASCRIPT</p>
          </motion.div>

          <motion.div variants={variants} className=' shadow-md shadow-blue-300 rounded-lg hover:scale-105 duration-200 py-2'>
            <div className='rounded-lg' style={{
             background: `url(${tailwind})`,
             backgroundSize: 'cover', 
             backgroundPosition: 'left',
             backgroundRepeat: 'no-repeat',
             height: '200px',
           }}></div>
            <p className='p-2 text-center text-white font-bold '>TAILWIND CSS</p>
          </motion.div>


        
        </motion.div>

      

       
      </div>
    </div>
  )
}

export default Experience