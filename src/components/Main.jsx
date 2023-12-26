import React from "react";
import {TypeAnimation} from 'react-type-animation'
import {FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa';
const Main= () => {
    return(
        <div id='main'>
            <img className='w-full h-screen object-cover 'src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="BG Image" style={{ filter: 'blur(6px)' }}/>
            <div className= 'w-full h-screen absolute top-0 left-0 bg-black/30 '>
            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-red-50'style= {{ margin: 0, fontSize: '3em', paddingLeft: '5px', color: '#edf5e1' }}>Hey,there! I'm Shayan Vatsa. </h1>
                <h2 className='sm:text-3xl text-2xl pt-4 text-red-50'style= {{ margin: 0, fontSize: '2em', paddingLeft: '5px', color: '#edf5e1' }}>

                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'A Tech Enthusiast ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        '& Cybersecurity Nerd.',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px'}}
      repeat={Infinity}
    />
    </h2>
    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
    <FaGithub style={{ cursor: 'pointer', color: 'white' }}size={20}/>
    <FaLinkedinIn style={{ cursor: 'pointer', color: 'white' }}size={20}/>
    <FaInstagram style={{ cursor: 'pointer', color: 'white' }}size={20}/>
    </div>
    </div>
        </div>
        </div>
    )
}

export default Main