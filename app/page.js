import React from 'react'
import About from '@/components/about/page'
import Banner from '@/components/banner/page'
import Contact from '@/components/contact/page'
import Projects from '@/components/projects/page'
import Resume from '@/components/resume/page'
import Testimonials from '@/components/testimonials/page'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#696969] to-[#D7A2A8]'>
      <section className='mx-auto w-[90%] py-16'>
        <Banner/>
        {/* <Resume/> */}
        <Projects/>
        {/* <Testimonials/> */}
        <Contact/>
      </section>
    </div>
  );
}

export default Home