import React from 'react'
import ProjectCard from './ProjectCard';
import flowpay from '../../assets/flowpay.jpeg'
import portfolioImg from '../../assets/portfolioImg.jpeg'
import weatherImg from '../../assets/weatherImg.jpeg'  

const Projects = () => {
  return (
  <div id="Projects" className='p-10 md:p-24 text-white'>
    <h1 className='text-white flex flex-col text-2xl md:text-4xl font-bold px-12 py-8'>Projects</h1>
    <div className='py-12 px-8 flex  flex-wrap  justify-around'>
          <a href="hhttps://github.com/Anujharad/FlowPay---A-Digital-Wallet" target="_blank" rel="noopener noreferrer">
          <ProjectCard title={"FlowPay – A Digital Wallet"} description={'Designed and developed a secure full-stack digital wallet application using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.'} bannerImg={flowpay}/></a>
          <a href="https://github.com/Anujharad/Portfolio" target="_blank" rel="noopener noreferrer">
          <ProjectCard title={"Personal Portfolio Website"} description={'Built a responsive personal portfolio website to showcase projects and skills. Implemented using React.js and Tailwind CSS, focusing on clean design and smooth user experience.'} bannerImg={portfolioImg} /></a>
          <a href="https://github.com/Anujharad/PRODIGY_WD_05" target="_blank" rel="noopener noreferrer">
          <ProjectCard title={"APIs based Weather Application "} description={'A Weather API based application for real-time weather information - HTML, CSS, Javascript, Node.js.'} bannerImg={weatherImg} />
           </a>
     </div>
                
       <div className=''></div>
    </div>
    
  )
}

export default Projects