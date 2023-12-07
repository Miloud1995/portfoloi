import React from 'react'

const ContactMe = () => {
  return (
      <div name='contact' className=' bg-gradient-to-b from-slate-900 to-slate-100 text-white'>
          <div className='flex flex-col p-4 justify-centre max-w-screen-lg mx-auto h-full'>
              <div className='pb-8'>
                  <h1 className='text-4xl lg:ml-96  font-bold inline border-b-4 border-gray-400'>Contact Me</h1>
                  <p className='mt-20 text-xl lg:ml-80'>Fill in the form below to contact me</p>
              </div>
              <div >
                  <form action="https://getform.io/f/e71a6aac-2752-440c-87d1-6326c77e771a" method='POST' className='flex flex-col p-6 w-full'>
                    
                      <input type="text" name='name' placeholder='enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                      <input type="email" name='email' placeholder='enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4' />
                      <textarea rows="10" name='message' placeholder='enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                      <button className='text-white px-6 py-3 bg-gradient-to-l from-teal-950 to-green-100 my-6 mx-auto items-center rounded-md hover:scale-105 duration-200'>Contact Me</button>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default ContactMe