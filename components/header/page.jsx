import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-[#696969] text-[#D7A2A8]'>
      <div className='flex justify-between px-6 py-4'>
        <div>
          <h1 className='text-3xl'>CQW</h1>
        </div>
        <nav className='flex gap-5 items-center'>
          <Link href='/' className='hover:bg-[#fae9eb] p-2 rounded-lg hover:text-[#c26d77]'>Home</Link>
          <Link href='/projects' className='hover:bg-[#fae9eb] p-2 rounded-lg hover:text-[#c26d77]'>Projects</Link>
          <Link href='/resume' className='hover:bg-[#fae9eb] p-2 rounded-lg hover:text-[#c26d77]'>Resume</Link>
          {/* <Link href='/testimonials' className='hover:bg-[#fae9eb] p-2 rounded-lg hover:text-[#c26d77]'>Testimonials</Link> */}
          <Link href='/contact' className='hover:bg-[#fae9eb] p-2 rounded-lg hover:text-[#c26d77]'>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header