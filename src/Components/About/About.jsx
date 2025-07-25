import React from 'react'
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden item-center md:flex-wrap md:justify-between bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div >
       <h2 className='text=2xl md:text-4xl font-bold'>About</h2>
      <div className='md:flex flex-wrap  flex-col md:flex-row item-center'>
        <img className="md:h-80" src={AboutImg}  alt=""></img>
        <ul className='md:mt-6'>
          <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className=''/>
            <span className='w-96'>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'> Frontend Developer</h1>
              <p className='text-sm md:text-md leading-tight'>nidnininidnnniiidninfnnininifddhg gdf 
                inininininininin ninindg dg gb </p>
            </span>

          </div>
          <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className='mt'/>
            <span className='w-96'>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'> Backend Developer</h1>
              <p className='text-sm md:text-md leading-tight'>nidnininidnnniiidninfnnininifddhg gdf 
                inininininininin ninindg dg gb </p>
            </span>

          </div>
          <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className=''/>
            <span className='w-96'>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'> Database Developer</h1>
              <p className='text-sm md:text-md leading-tight'>nidnininidnnniiidninfnnininifddhg gdf 
                inininininininin ninindg dg gb </p>
            </span>

          </div>
        </ul>
       </div>

      </div>
    </div>
     
  )
}

export default About