import React from 'react'
import avatarImg from '../../assets/proimg.png'
import Textchanger from '../Textchanger'

const Home = () => {
  return (
  <div className='text-white flex w-full my-20 justify-between items-start p-10 md:p-20'>
    <div className='md:w-2/4 md:pt-10'>
      <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'> <Textchanger ></Textchanger></h1>
      <p className="text-sm md:text-2xl tracking-tight">
       ghfhf fdhfd fg dfg fg dfg df jjjikkkkkkkkk
       
      </p>  
       
    <button className='mt-5 md:mt-10 py-2 px-3 text-sm md:text-lg md:py-2 md:px-2 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-slate-500'>Contact Me</button>
     
    
 </div> 
 <div>
  <img className='' src={avatarImg} alt=""></img>
 </div>
 </div>
)   

}

export default Home