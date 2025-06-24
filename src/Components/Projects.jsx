import React, { useState } from 'react'
import S1 from '../subcomponentts/S1'
import S2 from '../subcomponentts/S2'
import S3 from '../subcomponentts/S3'
import S4 from '../subcomponentts/S4'

const Projects = () => {
const [first, setFirst] = useState(false)
const [second, setSecond] = useState(false)
const [third, setThird] = useState(false)
const [fourth, setFourth] = useState(false)

  return (
   <>
   <div id='project'>
    <h1 className='text-center text-white text-5xl mt-50 font-bold'>My <span className='text-blue-500'>Projects</span> </h1>
    <div className='grid grid-cols-2 ml-52'>
    <div className=' relative h-[20vw] w-[30vw] mt-24 p-5 z-10   bg-blue-500 rounded-3xl'
    onMouseEnter={()=> setFirst(true)}
    onMouseLeave={()=> setFirst(false)}>
        <img className={`h-full rounded-3xl transition-opacity duration-300 ${first ? 'opacity-10' : 'opacity-100' }`}  src="s1.png" alt="" />
        {first && (
            <div className='absolute left-0 top-0 h-full w-full p-7 text-white z-20'>
<S1/>
            </div>
        )}
    </div>

     <div className='h-[20vw] w-[30vw] mt-24 p-5 relative bg-blue-500 rounded-3xl'
      onMouseEnter={()=> setSecond(true)}
    onMouseLeave={()=> setSecond(false)}
     >
        <img className={`h-full rounded-3xl transition-opacity duration-300 ${second ? 'opacity-10' : 'opacity-100' }`} src="s2.png" alt="" />
         {second && (
            <div className='absolute left-0 top-0 h-full w-full p-7 text-white z-20'>
<S2/>
            </div>
        )}
    </div>

     <div className='h-[20vw] w-[30vw] mt-24 relative p-5 bg-blue-500 rounded-3xl'
      onMouseEnter={()=> setThird(true)}
    onMouseLeave={()=> setThird(false)}
     >
        <img className={`h-full rounded-3xl transition-opacity duration-300 ${third ? 'opacity-10' : 'opacity-100' }`} src="s3.png" alt="" />
        
        {third && (
            <div className='absolute left-0 top-0 h-full w-full p-7 text-white z-20'>
<S3/>
            </div>
        )}
    </div>

     <div className='h-[20vw] w-[30vw] mt-24 p-5 relative bg-blue-500 rounded-3xl'
     onMouseEnter={()=> setFourth(true)}
    onMouseLeave={()=> setFourth(false)}
     >
        <img className={`h-full rounded-3xl transition-opacity duration-300 ${fourth ? 'opacity-10' : 'opacity-100' }`} src="s4.png" alt="" />
          {fourth && (
            <div className='absolute left-0 top-0 h-full w-full p-7 text-white z-20'>
<S4/>
            </div>
        )}
    </div>
    </div>
   </div>
   </>
  )
}

export default Projects
