import React from 'react'

const About = () => {
  return (
    <>
    <div id='about' className='flex flex-col mt-24 lg:flex-row items-center justify-center gap-48 px-6 lg:px-24 py-16 '>
         <div className='h-64 w-64 md:h-80 md:w-80 lg:h-80 lg:w-[20 vw] mt-22 rounded-full border-8 border-t-blue-500 border-b-blue-500 border-l-fuchsia-700 border-r-fuchsia-700 shadow-[0_0_30px_10px_rgba(59,130,246,1)]'>
            <img className='rounded-full h-full w-full' src="pic.jpeg" alt="" />
        </div>

        <div className='text-white max-w-3xl mt-8 lg:mt-02'>
            <h1 className='text-center text-5xl font-bold'>About <span className='text-blue-500'>Me</span> </h1><br />
            <h1 className='font-bold ml-32 mr-14'>
                I am a recent graduate with a Bachelor’s degree in Computer Science and Engineering, passionate about building scalable <br />and user-friendly web applications. During my academic journey, I completed two internships that gave me practical <br /> experience  in modern development frameworks and tools, including React, Tailwind CSS, Express.js etc.

I have a solid <br /> foundation in both frontend and backend development, and I enjoy working across the full stack to create dynamic and responsive user experiences. My skill set includes HTML, CSS, JavaScript, React, Node.js, Express, SQL, and version control using Git.

Eager to learn and grow, I am now looking for opportunities to contribute to impactful projects and collaborate with teams that value clean code, innovation, and continuous improvement.
            </h1>
        </div>
    </div>
    </>
  )
}

export default About
