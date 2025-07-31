import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';

const Experience = () => {
  return (
    <div className='p-10 px-10'>
       <h1 className='text-white text-2xl md:text-4xl font-bold px-12 py-8 '>Experience</h1>
     <div className='flex flex-wrap items-center justify-around'>
       <div className='flex flex-wrap gap-8 md:w-2/5 md:p-12 py-10'>
        <div className='p-3 bg-black flex rounded-2xl items-center'>
        <FaHtml5 color={"red"} size={50}></FaHtml5>
        </div>
        <div className='p-3 bg-black flex rounded-2xl items-center'>
        <FaCss3 className='text-blue-600' size={50}></FaCss3>
       </div>
       <div className='p-3 bg-black flex rounded-2xl items-center'>
        <FaJs color={"yellow"} size={50}></FaJs>
       </div>
       <div className='p-3 bg-black flex rounded-2xl items-center'>
        <FaReact className='text-blue-400' size={50}></FaReact>
       </div>
       <div className='p-3 bg-black flex rounded-2xl items-center'>
        <SiMongodb color={"green"} size={50}></SiMongodb>
       </div>
       <div className='p-3 bg-black flex rounded-2xl items-center'>
        <SiExpress className="text-yellow-600" size={50}></SiExpress>
       </div>
       <div className='p-3 bg-black rounded-2xl items-center'>
        <SiNodedotjs color={"green"} size={50}></SiNodedotjs>
       </div>
       <div className='p-3 bg-black rounded-2xl items-center'>
        <SiTailwindcss className='text-blue-500' size={50}></SiTailwindcss>
       </div>
       </div>
     <div>
           jnjnn
     </div>
      
     </div>
    </div>
  )
}

export default Experience;