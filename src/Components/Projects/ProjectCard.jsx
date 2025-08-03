import React from 'react'
import bannerImg from '../../assets/photo-C8q0KQHG.webp'
const ProjectCard = ({title,description}) => {
  return (
    <div className='bg-black bg-opacity-40 shadow-xl shadow-slate-900 w-2/5 pl-2 text-white '>
        <img src={bannerImg} alt="" />
        
        <h1 className='p-2 font-bold text-2xl'>{title}</h1>
        <div className='flex-wrap'>
        <p className='text-sm '>{description}</p></div>
        <div className='pt-5 items-center'>
            <button className='bg-slate-700  p-2 flex wrap text-lg hover:bg-slate-400 rounded-3xl'>
               Source Code 
            </button>
        </div>

         
    </div>
  )
}

export default ProjectCard
