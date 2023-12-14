import React from 'react'
import image1 from '../assets/portfolio/p1.jpg'
import image2 from '../assets/portfolio/p2.webp'
import image3 from '../assets/portfolio/p3.jpg'
import image4 from '../assets/portfolio/p4.jpg'
import image5 from '../assets/portfolio/p5.jpg'
import { motion } from "framer-motion"

const variants = {
    intialed: {
        y: "40%",
        opacity:0
    },
    animated: {
        y: 0,
        opacity: 1,
        transition: {
            straggerChildren:1,
            duration:0.5
        }
    }
}
const variants2 = {
    intialed: {
        y: "-40%",
        opacity:0
    },
    animated: {
        y: 0,
        opacity: 1,
        transition: {
            straggerChildren:1,
            duration:1
        }
    }
}

const Portfolio = () => {
  return (
      <div name='portfolio' className='text-white md:h-screen mb-20'>
          <div className='max-w-screen-lg w-full h-full  mx-auto flex flex-col justify-center '>
              <div className='pb-0'>
                  <h1 className='text-4xl font-bold inline border-b-4 border-gray-300 lg:ml-96'>Portfolio</h1>
                  <p className='py-6 lg:ml-80'>check out some of my projects here</p>
              </div>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                  <motion.div variants={variants2}  initial="intialed"  whileInView="animated" className=' shadow-md shadow-gray-600 rounded-lg mt-6 '>
                      <motion.img  src={image1} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <motion.div  className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <motion.button  className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full hover:scale-105 duration-200'>Demo</motion.button>
                          <motion.button  className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</motion.button>
                      </motion.div>
                  </motion.div>
                  <motion.div variants={variants2}   initial="intialed"  whileInView="animated" className=' shadow-md shadow-gray-600 rounded-lg mt-6 '>
                      <motion.img  src={image2} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <motion.div  className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <motion.button  className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full  hover:scale-105 duration-200'>Demo</motion.button>
                          <motion.button  className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</motion.button>
                      </motion.div>
                  </motion.div>
                  <motion.div variants={variants2}   initial="intialed"  whileInView="animated" className=' shadow-md shadow-gray-600 rounded-lg mt-6'>
                      <motion.img  src={image3} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <motion.div  className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <motion.button  className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full  hover:scale-105 duration-200'>Demo</motion.button>
                          <motion.button  className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</motion.button>
                      </motion.div>
                  </motion.div>
                  <motion.div variants={variants2}   initial="intialed"  whileInView="animated" className=' shadow-md shadow-gray-600 rounded-lg mt-6'>
                      <motion.img  src={image4} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <motion.div  className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <motion.button  className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full  hover:scale-105 duration-200'>Demo</motion.button>
                          <motion.button  className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</motion.button>
                      </motion.div>
                  </motion.div>
                  <motion.div  variants={variants2}  initial="intialed"  whileInView="animated" className=' shadow-md shadow-gray-600 rounded-lg mt-6'>
                      <motion.img  src={image5} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <motion.div  className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <motion.button  className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full  hover:scale-105 duration-200'>Demo</motion.button>
                          <motion.button  className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</motion.button>
                      </motion.div>
                  </motion.div>
                  <motion.div variants={variants2}  initial="intialed" whileInView="animated" className=' shadow-md shadow-gray-600 rounded-lg mt-6'>
                      <motion.img  src={image2} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <motion.div  className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <motion.button  className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full  hover:scale-105 duration-200'>Demo</motion.button>
                          <motion.button  className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</motion.button>
                      </motion.div>
                  </motion.div>
              </div>
          </div>
    </div>
  )
}

export default Portfolio