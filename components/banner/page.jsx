import React from 'react'
import Image from 'next/image'
import mePic from '../../public/Images/mePic.png'
import { BsFacebook } from 'react-icons/Bs'
import { BsInstagram } from 'react-icons/Bs'
import { BsLinkedin } from 'react-icons/Bs'
import { BsGithub } from 'react-icons/Bs'
import { FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandTailwind } from 'react-icons/tb'
import { TbBrandJavascript } from 'react-icons/tb'
import { TbBrandNodejs } from 'react-icons/tb'
import { SiExpress } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { TbBrandMongodb } from 'react-icons/tb'
import { SiNetlify } from 'react-icons/si'

const Banner = () => {
  return (
    <div className='flex mb-20 items-center'>
        <div className='max-w-[50%]'>
          <h3 className='uppercase text-white text-lg py-2'>Welcome to my world!</h3>
          <h1 className='text-6xl py-3 font-semibold'>Hi, I'm <span className='text-[#DA6085]'>Chuma Wakaba</span></h1>
          <h2 className='text-3xl py-3'>A Full Stack Web Developer</h2>
          <p className='py-3'>I'm a well-rounded web developer with expertise in creating interactive and user friendly web applications. I have been officially working as a developer for a year and and am now proficient in building modern, responsive web applications using Next.js. As mentioned above, I am a full-stack web-developer capable of working on both frontend and backend aspects of web development, using Tailwind CSS to streamline the styling and design of web applications. I am experienced in responsive web design. Being able to design and develop websites that adapt seamlessly to various screen sizes and devices. Effective communicator with collaboration skills for working well in a development teams.</p>
          <div className='flex justify-between mt-8'>
            <div>
              <h2 className='mb-3 uppercase text-[#383535] font-semibold'>Find me on</h2>
              <div className='grid grid-cols-4 justify-evenly gap-4 text-3xl text-[#f54e80] bg-[#383535] rounded p-4 shadow-xl shadow-[#DA6085]/50'>
                <h4><BsFacebook className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
                <h4><BsInstagram className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
                <h4><BsLinkedin className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
                <h4><BsGithub className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
              </div>
            </div>
            <div>
              <h2 className='mb-3 uppercase text-[#383535] font-semibold'>Skills</h2>
              <div className='grid grid-cols-4 justify-evenly gap-4 text-3xl text-[#f54e80] bg-[#383535] rounded p-4 shadow-xl shadow-[#DA6085]/50'>
                <h4><FaReact className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
                <h4><TbBrandNextjs className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
                <h4><TbBrandTailwind className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
                <h4><TbBrandJavascript className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
                <h4><TbBrandNodejs className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
                <h4><SiExpress className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
                <h4><SiMongodb className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
                <h4><SiNetlify className='hover:transform hover:scale-125 transition-transform duration-300 hover:text-[#eca5bc]'/></h4>
                {/* <h4><TbBrandMongodb/></h4> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={mePic} alt='Me' className='object-contain max-h-[400px] max-w-[40%] px-1 py-3 justify-center items-baseline bg-[#383535] mx-auto rounded shadow-xl shadow-[#DA6085]/50'/>
        </div>
    </div>
  )
}

export default Banner