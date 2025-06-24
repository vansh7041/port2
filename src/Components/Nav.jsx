import React from 'react'
import About from './About'

const Nav = () => {
  return (
    <>
    
    <div className='w-full fixed top-0 z-50 bg-gray-950 text-white font-semibold flex justify-between p-6'>
        <h1 className='ml-20 text-2xl'>
            Portfolio
        </h1>    
        <div className='flex gap-12 mr-36  text-2xl'>
            <a className='hover:text-blue-500' href="#home">Home</a>
           
            <a className='hover:text-blue-500' href="#about">About</a> 
            <a className='hover:text-blue-500' href='#skills'>Skills</a>
            <a className='hover:text-blue-500' href='#project'>Projects</a>
            <a className='hover:text-blue-500' href='#contact'>Contact</a>
        </div>
        </div>

    </>
  )
}

export default Nav
