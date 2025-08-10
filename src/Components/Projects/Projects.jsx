import React from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
  <div id="Projects" className='p-10 md:p-24 text-white'>
    <h1 className='text-white flex flex-col text-2xl md:text-4xl font-bold px-12 py-8'>Projects</h1>
    <div className='py-12 px-8 flex  flex-wrap  justify-around'>
          <ProjectCard title={"FlowPay – A Digital Wallet"} description={'Designed and developed a secure full-stack digital wallet application using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.'} />
          <ProjectCard title={"Personal Portfolio Website"} description={'Built a responsive personal portfolio website to showcase projects and skills. Implemented using React.js and Tailwind CSS, focusing on clean design and smooth user experience.'} />
          <ProjectCard title={"APIs based Weather Application "} description={'A Weather API based application for real-time weather information - HTML, CSS, Javascript, Node.js.'} />

     </div>
                
       <div className=''></div>
    </div>
    
  )
}

export default Projects