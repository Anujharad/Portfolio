import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';

const Experience = () => {
  return (
    <div className='p-10 px-10'>
       <h2 className='text-white text-2xl md:text-4xl font-bold px-12 py-8 '>Experience</h2>
     <div className='flex w-2/5'>
       <div className='flex justify-center gap-4 '>
        <div className='p-3 bg-black flex rounded-2xl items-center'>
        <FaHtml5 color={"red"} size={50}></FaHtml5>
        </div>
        <div className='p-3 bg-black flex rounded-2xl items-center'>
        <FaCss3 color={"red"} size={50}></FaCss3>
       </div>
       <div className='p-3 bg-black flex rounded-2xl items-center'>
        <FaCss3 color={"red"} size={50}></FaCss3>
       </div>
       <div className='p-3 bg-black flex rounded-2xl items-center'>
        <FaCss3 color={"red"} size={50}></FaCss3>
       </div>
       <div className='p-3 bg-black flex rounded-2xl items-center'>
        <FaCss3 color={"red"} size={50}></FaCss3>
       </div>
       <div className='p-3 bg-black flex rounded-2xl items-center'>
        <FaCss3 color={"red"} size={50}></FaCss3>
       </div>
       <div className='p-3 bg-black rounded-2xl items-center'>
        <FaCss3 color={"red"} size={50}></FaCss3>
       </div>
       </div>
     <div>

     </div>
      
     </div>
    </div>
  )
}

export default Experience;