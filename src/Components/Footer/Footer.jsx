import React from 'react'
import { MdOutlineEmail} from 'react-icons/md';
import { CiLinkedin} from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
     <div id="Footer" className='bg-slate-700 text-white flex flex-col-2 justify-around p-10 md:p-12 items-center '>
      <div className=' '>
          <h1 className='text-2xl md:text-6xl font-bold '>Contact</h1>
         <h4 className='text-sm md:text-2xl font-normal'>Feel Free To Reach Out!</h4>
        
      </div>
      <div className=' text-sm md:text-xl'>
        <div className='flex  gap-1 items-center'>
          <MdOutlineEmail size={20} />
          fullstackdevanuj@gmail.com
        </div>
        
        <div className='flex  gap-1 items-center'>
          <CiLinkedin size={20} />
          anujharad
        </div>
        <div className='flex  gap-1 items-center'>
          <FaGithub size={20} />
          anujharad
        </div>
      </div>


     </div>
  )
}

export default Footer