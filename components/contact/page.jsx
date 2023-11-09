import React from 'react'
import { BsFacebook } from 'react-icons/Bs'
import { BsInstagram } from 'react-icons/Bs'
import { BsLinkedin } from 'react-icons/Bs'
import { BsGithub } from 'react-icons/Bs'
import { FaMobileAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-r from-[#696969] to-[#D7A2A8]'>
      <section className='max-w-[90%] mx-auto py-16 items-center text-center'>
        <hr className="w-14 h-1 mx-auto my-4 bg-[#f03e73] border-0 rounded"></hr>
        <h1 className='text-5xl font-semibold'>Here is how to <span className='text-[#DA6085]'>reach me...</span></h1>
        <hr className="w-14 h-1 mx-auto my-4 bg-[#f03e73] border-0 rounded"></hr>
        <div className='flex mt-20 mb-20'>
          <form className='max-w-[50%] mx-auto bg-gradient-to-r from-[#D7A2A8] to-[#696969] p-6 rounded'>
          <div className='flex justify-between'>
            <div className='py-4'>
              <label htmlFor='name'>Name:</label>
              <input 
                type='text'
                id='name' 
                name='name' 
                autoComplete='name'
                placeholder='Name'
                className='block w-full relative px-3 py-2 my-3 border placeholder-gray-400 focus:outline-none focus:ring-[#DA6085] focus:border-[#DA6085]'
              />
            </div>
            <div className='py-4'>
              <label htmlFor='number'>Cell Number:</label>
              <input 
                type='text'
                id='cellnumber' 
                name='cellnumber' 
                autoComplete='phone'
                placeholder='Cellphone'
                className='block w-full relative px-3 py-2 my-3 border placeholder-gray-400 focus:outline-none focus:ring-[#DA6085] focus:border-[#DA6085]'/>
              </div>
            </div>
            <div className='py-4'>
              <label htmlFor='email'>Email:</label>
              <input 
                type='email'
                id='email' 
                name='email' 
                autoComplete='email'
                placeholder='Email'
                className='block w-full relative px-3 py-2 my-3 border placeholder-gray-400 focus:outline-none focus:ring-[#DA6085] focus:border-[#DA6085]'
                />
            </div>
            <div className='py-4'>
              <label htmlFor='message'>Message:</label>
              <input 
                type='text'
                id='message' 
                name='message'
                placeholder='Hello!...'
                className='block w-full relative px-3 py-2 my-3 border placeholder-gray-400 focus:outline-none focus:ring-[#DA6085] focus:border-[#DA6085]'
                />
            </div>
          <button className='bg-[#fae9eb] py-2 px-4 rounded text-[#c26d77] hover:bg-[#c26d77] hover:text-white'>Submit</button>
        </form>
            <div className='bg-[#383535] rounded p-4 shadow-xl shadow-[#DA6085]/50 max-h-[30%] mx-auto'>
              <h2 className='mb-3 uppercase text-white font-semibold'>Contact me on</h2>
              <div className='text-[#f54e80] '>
                <div className='flex gap-3 py-3'>
                  <h4 className='text-3xl'><FaMobileAlt/></h4>
                  <h4 className='text-xl'>060 739 1024</h4>
                </div>
                <div className='flex gap-3'>
                  <h4 className='text-3xl'><HiOutlineMail/></h4>
                  <h4 className='text-xl'>cwakaba73@gmail.com</h4>
                </div>
              </div>
              <div>
              <h2 className='mb-3 uppercase text-white font-semibold py-3'>Find me on</h2>
              <div className='flex gap-6 text-3xl text-[#f54e80]'>
                <h4 className='hover:transform: scale(1.5)'><BsFacebook/></h4>
                <h4><BsInstagram/></h4>
                <h4><BsLinkedin/></h4>
                <h4><BsGithub/></h4>
              </div>
              </div>
            </div>
            </div>
      </section>
    </div>
  )
}

export default Contact