import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { ReactTyped } from 'react-typed';


const Home = () => {
  return (
    <>
    <div id='home' className='flex'>
        <div className='text-white mt-64 ml-32 font-bold'>
            <h2 className='text-3xl'>Hello, It's Me</h2>
            <h1 className='text-5xl'>Vansh Barot</h1>
            <h2 className='text-3xl'>And I Am A <span className='text-blue-500'>
    <span id="typed-element">
      <ReactTyped
        strings={[
          'Frontend Developer.',
          'React Developer.',
          'MERN Stack Developer.',
          'Data Specialist.'
        ]}
        typeSpeed={80}
        backSpeed={50}
        loop
      />
    </span>
  </span></h2><br />
            <h3>As a highly motivated and detail-oriented Computer Science graduate,<br />
I possess a solid foundation in programming, algorithms, and software
development. <br /> My proficiency in multiple programming languages,
including Java, C, and JavaScript, <br />is complemented by hands-on
experience in both front-end and back-end development. <br />I am well versed in web development frameworks, database management, and
cloud technologies.</h3><br />
<div className='flex gap-5'>
    <div className='bg-white text-black h-10 w-10  rounded-full p-2 hover:bg-blue-500 hover:text-white'>
       <a href="https://www.linkedin.com/in/vansh-barot-60497b30a"><FaLinkedinIn className='text-2xl' /> </a> 
    </div>
    <div className='bg-white text-black h-10 w-10  rounded-full p-2 hover:bg-green-500 hover:text-white'>
 <a href="https://wa.me/7041869675"><IoLogoWhatsapp className='text-2xl' /></a> 
    </div>
    <div className='bg-white text-black h-10 w-10  rounded-full p-2 hover:bg-pink-500 hover:text-white'>
 <a href="https://www.instagram.com/__vansh_07?igsh=MXdwZzQxM2NiNmVyZg=="> <FaInstagramSquare className='text-2xl' /></a>
    </div>
   <a href="cv.pdf"><div className='bg-white text-black p-2 rounded-3xl hover:bg-blue-500 hover:text-white'>Download Resume</div>
    </a> 
</div>

        </div>

        <div className='h-96 w-96 mt-48 ml-56 rounded-full border-8 border-t-blue-500 border-b-blue-500 border-l-fuchsia-700 border-r-fuchsia-700 shadow-[0_0_30px_20px_rgba(59,130,246,1)]'>
            <img className='rounded-full' src="pic.jpeg" alt="" />
        </div>
    </div>
    </>
  )
}

export default Home
