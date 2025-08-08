import React from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
  <div id="Projects" className='p-10 md:p-24 text-white'>
    <h1 className='text-white flex flex-col text-2xl md:text-4xl font-bold px-12 py-8'>Projects</h1>
    <div className='py-12 px-8 flex flex-wrap gap-5 justify-around'>
          <ProjectCard title={"web devc"} description={'NNSDKN8h8h8h8h8v h8h8h8h8h8DSKNSKNDSKNKNNOksdni nsdnsdninin'} />
          <ProjectCard title={"flow pay"} description={'transcation app '} />
          <ProjectCard title={"blogging"} description={'NNSDKN8h8h8h8h8v h8h8h8h8h8DSKNSKNDSKNKNNOksdni nsdnsdninin'} />

     </div>
                
       <div className=''></div>
    </div>
    
  )
}

export default Projects