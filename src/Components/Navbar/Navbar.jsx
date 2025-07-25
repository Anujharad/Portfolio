import React from 'react';
import { useState } from "react";
import {RiMenu2Line , RiCloseLine} from "@remixicon/react"

export const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] =useState(true);

  return (
    <nav className='flex flex-wrap justify-between md:item-center text-white px-10 pt-6 md:px-20'>

        <span className='text-xl font-bold tracking-wide '>Portfolio</span>
        <ul className={'${ menu ? "block" : "hidden" } mx-24 py-2 mt-2 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:flex md:mx-0 gap-5'}>
            <a href="#About">
            <li className=" text-md transition-all duration-300 p-1 md:p-0 ">About</li>
            </a>

             <a href="#Experience">
            <li className=" text-md transition-all duration-300 p-1 md:p-0 ">Experince</li>
            </a>
              
             <a href="#Projects">
            <li className=" text-md transition-all duration-300 p-1 md:p-0 ">Projects</li>
            </a>
            <a href="Contact"> 
            <li className=" text-md transition-all duration-300 p-1 md:p-0 ">Contact</li>
            </a>
        </ul>
      {showMenu ? (
        <RiMenu2Line  size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={()=>{  openMenu(!menu); setShowmenu(!showMenu);}}/>
       ): ( <RiCloseLine size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300"></RiCloseLine> )
      }
    </nav>
  )
}

