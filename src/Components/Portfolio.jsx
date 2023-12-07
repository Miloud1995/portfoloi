import React from 'react'
import image1 from '../assets/portfolio/p1.jpg'
import image2 from '../assets/portfolio/p2.webp'
import image3 from '../assets/portfolio/p3.jpg'
import image4 from '../assets/portfolio/p4.jpg'
import image5 from '../assets/portfolio/p5.jpg'

const Portfolio = () => {
  return (
      <div name='portfolio' className='  text-white md:h-screen '>
          <div className='max-w-screen-lg w-full h-full p-4 mx-auto flex flex-col justify-center '>
              <div className='pb-8'>
                  <h1 className='text-4xl font-bold inline border-b-4 border-gray-300 lg:ml-96'>Portfolio</h1>
                  <p className='py-6 lg:ml-80'>check out some of my projects here</p>
              </div>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                  <div className=' shadow-md shadow-gray-600 rounded-lg mt-6 '>
                      <img src={image1} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <div className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <button className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full hover:scale-105 duration-200'>Demo</button>
                          <button className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</button>
                      </div>
                  </div>
                  <div className=' shadow-md shadow-gray-600 rounded-lg mt-6 '>
                      <img src={image2} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <div className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <button className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full  hover:scale-105 duration-200'>Demo</button>
                          <button className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</button>
                      </div>
                  </div>
                  <div className=' shadow-md shadow-gray-600 rounded-lg mt-6'>
                      <img src={image3} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <div className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <button className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full  hover:scale-105 duration-200'>Demo</button>
                          <button className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</button>
                      </div>
                  </div>
                  <div className=' shadow-md shadow-gray-600 rounded-lg mt-6'>
                      <img src={image4} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <div className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <button className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full  hover:scale-105 duration-200'>Demo</button>
                          <button className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</button>
                      </div>
                  </div>
                  <div className=' shadow-md shadow-gray-600 rounded-lg mt-6'>
                      <img src={image5} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <div className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <button className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full  hover:scale-105 duration-200'>Demo</button>
                          <button className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</button>
                      </div>
                  </div>
                  <div className=' shadow-md shadow-gray-600 rounded-lg mt-6'>
                      <img src={image2} alt="img" className='group rounded-md hover:scale-105 duration-200 w-full h-full' />
                      <div className='flex justify-around items-center  shadow-md shadow-gray-600  font-md'>
                          <button className=' bg-gradient-to-r from-sky-400 to-blue-700 w-full p-2 h-full  hover:scale-105 duration-200'>Demo</button>
                          <button className=' bg-gradient-to-r from-blue-700 to-sky-400 w-full p-2 h-full  hover:scale-105 duration-200'>Code</button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Portfolio