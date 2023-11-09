import React from 'react'
import Image from 'next/image'
import blogPic from '../../public/Images/BlogPic.jpeg'
import bookStore from '../../public/Images/BookStore.jpg'
import clothes from '../../public/Images/ClothingStore.png'

const Projects = () => {
  return (
    <div>
      <div className='mx-auto py-16 items-center text-center'>
        <hr className="w-14 h-1 mx-auto my-4 bg-[#f03e73] border-0 rounded"></hr>
        <h2 className='text-5xl font-semibold'>Take a look at some <span className='text-[#DA6085]'> of my projects</span></h2>
        <hr className="w-14 h-1 mx-auto my-4 bg-[#f03e73] border-0 rounded"></hr>
        <cards className='flex justify-between mt-20 gap-5'>
          <div className='w-[30%] bg-[#383535] rounded shadow-xl shadow-[#DA6085]/50 mx-auto transition transform hover:scale-110'>
            <Image src={blogPic} alt='blog' className='w-full object-cover pt-3 pr-3 pb-6 pl-3'/>
            <h2 className='text-white text-center pb-6 shadow-xl'>Official Blog site</h2>
          </div>
          <div className='w-[30%] bg-[#383535] rounded shadow-xl shadow-[#DA6085]/50 mx-auto transition transform hover:scale-110'>
            <Image src={bookStore} alt='blog' className='w-full object-cover pt-3 pr-3 pb-6 pl-3'/>
            <h2 className='text-white text-center pb-6 shadow-xl'>Book Store</h2>
          </div>
          <div className='w-[30%] bg-[#383535] rounded shadow-xl shadow-[#DA6085]/50 mx-auto transition transform hover:scale-110'>
            <Image src={clothes} alt='blog' className='w-full object-cover pt-3 pr-3 pb-6 pl-3'/>
            <h2 className='text-white text-center pb-6 shadow-xl'>Convenience Store</h2>
          </div>
        </cards>
      </div>
    </div>
  )
}

export default Projects