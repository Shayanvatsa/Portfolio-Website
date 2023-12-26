import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { FaCode } from "react-icons/fa6";
import { GoPaperclip } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
    onClick={handleNav}
    className='fixed top-4 right-4 z-[99] md:hidden'
    style={{ color: 'white' }}
/>

        {
          nav ?(
            <div className='fixed w-full h-screen bg-black/90 flex flex-col justify-center z-50'>
              <a onClick={handleNav}  href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <IoIosInformationCircleOutline size={20} />
                <span className='pl-4'>About</span>
              </a>
              <a onClick={handleNav} href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <FaCode size={20} />
                <span className='pl-4'>Skills</span>
              </a>
              <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <GrProjects size={20} />
                <span className='pl-4'>Projects</span>
              </a>
              <a onClick={handleNav} href="#resume" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <GoPaperclip size={20} />
                <span className='pl-4'>Resume</span>
              </a>
              <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <IoIosContact  size={20} />
                <span className='pl-4'>Contact</span>
              </a>
            </div>

          )
          :(
            ''
          )
        }

        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <a href='#main' className='rounded-full shadow-lg bg-red-500 shadow-emerald-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <IoIosInformationCircleOutline size={25}/>
            </a>
            <a href='#skills' className='rounded-full shadow-lg bg-red-500 shadow-emerald-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaCode size={25}/>
            </a>
            <a href='#projects' className='rounded-full shadow-lg bg-red-500 shadow-emerald-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <GrProjects size={25}/>
            </a>
            <a href='#resume' className='rounded-full shadow-lg bg-red-500 shadow-emerald-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <GoPaperclip size={25}/>
            </a>
            <a href='#contact' className='rounded-full shadow-lg bg-red-500 shadow-emerald-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <IoIosContact size={25}/>
            </a>
          </div>
        </div>

    </div>
  );
};

  

export default NavBar;
