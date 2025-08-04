import React from 'react'
import bannerImg from '../../assets/photo-C8q0KQHG.webp'
const ProjectCard = ({title,description}) => {
  return (
    <div className='bg-black w-80 flex flex-col p-3 md:p-6 bg-opacity-40 shadow-xl rounded-2xl shadow-slate-900 p-3 text-white '>
        <img className='p-4' src={bannerImg} alt="" />
        
        <h1 className='px-4 font-bold text-xl  md:text-2xl leading-normal'>{title}</h1>
        
        <p className='text-sm  leading-tight px-4 md:text-md py-2'>{description}</p>
        <div className=' items-center'>
            <button className='bg-slate-700 md:p-4  p-2  flex wrap text-lg hover:bg-slate-400 rounded-3xl'>
               Source Code
            </button>
        </div>

         
    </div>
  )
}

export default ProjectCard
