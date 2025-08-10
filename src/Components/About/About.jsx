import React from 'react'
import AboutImg from "../../assets/aboutimg1.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className='text-white md:flex overflow-hidden item-center md:flex-wrap md:justify-between bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div >
       <h2 className='text=2xl md:text-4xl font-bold'>About</h2>
      <div className='md:flex flex-wrap  flex-col md:flex-row item-center'>
        <img className="md:h-80" src={AboutImg}  alt=""></img>
        <ul className='md:mt-6'>
          <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className=''/>
            <span className='w-96'>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'> Frontend Developer</h1>
              <p className='text-sm md:text-md leading-tight'>I create responsive and 
                 interactive web interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS.
                 I focus on clean design, smooth user experience, and seamless API integration.
              </p>
            </span>

          </div>
          <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className='mt'/>
            <span className='w-96'>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'> Backend Developer</h1>
              <p className='text-sm md:text-md leading-tight'>I develop secure and scalable server-side applications using Node.js and Express.js. 
                I build REST APIs, handle authentication, and manage business logic efficiently. </p>
            </span>
          </div>
          <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className=''/>
            <span className='w-96'>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'> Database Developer</h1>
              <p className='text-sm md:text-md leading-tight'>I design and manage databases in MongoDB and MySQL. 
                I ensure efficient data storage, optimized queries, and reliable connections between the backend and database. </p>
            </span>

          </div>
        </ul>
       </div>

      </div>
    </div>
     
  )
}

export default About