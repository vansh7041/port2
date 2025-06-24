import React, { useEffect, useState } from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
const Skills = () => {
 

  return (
    <>
    <div id='skills'>
        <div>
            <h1 className='text-center text-white text-5xl mt-50 font-bold'>My <span className='text-blue-500'>Skills</span></h1>
        </div>

        <div className='flex justify-between font-bold '>
            <div className=' '>
                <h1 className='underline-offset-2 text-2xl text-white ml-60 mt-14'>Technical Skills</h1> <br />
                 <div className='mt-6 text-white ml-30'>
  <div>
              <div className='flex items-center gap-2'>
                <FaHtml5 className='text-red-400 text-2xl' />
                <h1>HTML</h1>
               
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[93%] rounded-full transition-all duration-300"
                  
                ></div>
              </div>
            </div> <br />
                <div>
                  <FaCss3Alt  className='text-[#1572B6] text-2xl' />
                    <h1>CSS</h1>
                </div>
                 <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[90%] rounded-full transition-all duration-300"
                  
                ></div>
              </div> <br />
                <div>
                  <FaJsSquare  className='text-[#F7DF1E] text-2xl'/>

                    <h1>JS</h1>
                </div>
                 <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[89%] rounded-full transition-all duration-300"
                  
                ></div>
              </div> <br />
                <div>
                  <FaReact className='text-[#61DAFB] text-2xl' />

                    <h1>React</h1>
                </div>
                 <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[94%] rounded-full transition-all duration-300"
                  
                ></div>
              </div> <br />
                <div>
                  <FaDatabase title="SQL" className='text-[#00758F] text-2xl'/>
                    <h1>SQL</h1>
                </div>
                 <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[94%] rounded-full transition-all duration-300"
                  
                ></div>
              </div> <br />
                <div>
                 <SiExpress title="Express.js" className='text-white  text-2xl' />
                    <h1>Express Js</h1>
                </div>
                 <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[80%] rounded-full transition-all duration-300"
                  
                ></div>
              </div> <br />
                <div>
                  <FaNodeJs  className='text-[#339933]  text-2xl'/>
                    <h1>Node Js</h1>
                </div>
                 <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[80%] rounded-full transition-all duration-300"
                  
                ></div>
              </div><br />

              <div>
                 <PiMicrosoftExcelLogoFill className='text-[#217346]  text-2xl' />  
                    <h1>Excel</h1>
                </div>
                 <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[90%] rounded-full transition-all duration-300"
                  
                ></div>
              </div> <br />

              <div>
                <SiMongodb className='text-[#47A248]  text-2xl'/>
                    <h1>MongoDb</h1>
                </div>
                 <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[78%] rounded-full transition-all duration-300"
                  
                ></div>
              </div><br />

              <div>
                <SiTailwindcss className='text-[#38BDF8]  text-2xl'/>
                    <h1>Tailwind CSS</h1>
                </div>
                 <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[85%] rounded-full transition-all duration-300"
                  
                ></div>
              </div>
                </div>

                
            </div>

            <div className='mr-60 mt-14 text-white '>
                <h1 className='text-white text-2xl'>Professional Skills</h1> <br />
 <div className='mt-6 text-white mr-20'></div>
                <div>
              <div className='flex items-center gap-2'>
                
                <h1>Communication</h1>
               
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-full rounded-full transition-all duration-300"
                  
                ></div>
              </div>
            </div> <br /> <br />

             <div>
              <div className='flex items-center gap-2'>
                
                <h1>Problem Solving</h1>
               
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[96%] rounded-full transition-all duration-300"
                  
                ></div>
              </div>
            </div> <br /> <br />
               
                <div>
              <div className='flex items-center gap-2'>
                
                <h1>Time Management</h1>
               
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[95%] rounded-full transition-all duration-300"
                  
                ></div>
              </div>
            </div> <br /> <br />

             <div>
              <div className='flex items-center gap-2'>
                
                <h1>Team Collaboration</h1>
               
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[90%] rounded-full transition-all duration-300"
                  
                ></div>
              </div>
            </div> <br /> <br />

             <div>
              <div className='flex items-center gap-2'>
                
                <h1>Project Management</h1>
               
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[86%] rounded-full transition-all duration-300"
                  
                ></div>
              </div>
            </div> <br /> <br />

             <div>
              <div className='flex items-center gap-2'>
                
                <h1>Creativity</h1>
               
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 w-[90%] rounded-full transition-all duration-300"
                  
                ></div>
              </div>
            </div> <br />

            </div>
        </div>
    </div>
    </>
  )
}

export default Skills
