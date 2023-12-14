import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
  return (
      <div className='hidden md:flex flex-row md:flex-col top-1/4 left-0 fixed  '>
          <ul>
              <li className='flex justify-between items-center  w-40 h-14 px-4 bg-gray-500 -ml-24 hover:ml-1 duration-300 '>
                  <a href="https://linkedin.com" className='flex justify-between items-center text-white w-full '><>LinkedIn <FaLinkedin size={30}/></></a>
              </li>
              <li className='flex justify-between items-center  w-40 h-14 px-4 bg-gray-500 -ml-24 hover:ml-1 duration-300'>
                  <a href="https://github.com" className='flex justify-between items-center text-white w-full '><>Github <FaGithub size={30}/></></a>
              </li>
              <li className='flex justify-between items-center  w-40 h-14 px-4 bg-gray-500 -ml-24 hover:ml-1 duration-300'>
                  <a href="mailto:test752@gmail.com" className='flex justify-between items-center text-white w-full '><>Mail <HiOutlineMail size={30}/></></a>
              </li>
              <li className='flex justify-between items-center  w-40 h-14 px-4 bg-gray-500 -ml-24 hover:ml-1 duration-300'>
                  <a href="https://instagram.com" className='flex justify-between items-center text-white w-full  '><>Instagram <FaInstagram size={30}/></></a>
              </li>
              <li className='flex justify-between items-center  w-40 h-14 px-4 bg-gray-500 -ml-24 hover:ml-1 duration-300'>
                  <a href="/cin.pdf" download={true} className='flex justify-between items-center text-white w-full  '><>Resume <BsFillPersonLinesFill size={30}/></></a>
              </li>
          </ul>
     </div>
  )
}

export default SocialLinks