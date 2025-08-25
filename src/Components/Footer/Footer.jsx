import React from 'react'
import { MdOutlineEmail} from 'react-icons/md';
import { CiLinkedin} from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
     <div id="Footer" className='bg-slate-700 text-white flex flex-col-2 justify-around p-10 md:p-12 items-center '>
      <div className=' '>
          <h1 className='text-2xl md:text-6xl font-bold '>Contact Me</h1>
         <h4 className='text-sm md:text-2xl font-normal'>Feel Free To Reach Out!</h4>
        
      </div>
        
      <ul className="text-sm  md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fullstackdevanuj@gmail.com" target="_blank" rel="noopener noreferrer">
          fullstackdevanuj@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/devanuj1" target="_blank" rel="noopener noreferrer">
          https://www.linkedin.com/in/devanuj1
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub /><a href="https://github.com/Anujharad" target="_blank" rel="noopener noreferrer">
          https://github.com/Anujharad
          </a>
        </li>
      </ul>
      


     </div>
  )
}

export default Footer