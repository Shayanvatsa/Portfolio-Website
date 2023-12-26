import React from 'react';

const ContactMe = () => {
  return (
    <div id='contact' className='w-full h-screen relative'>
      <h1 className='text-4xl font-bold text-center text-[#EDF5E1]'>Contact Me</h1>
      <img
        className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'
        src="https://images.unsplash.com/photo-1513569771920-c9e1d31714af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwdGV4dHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        alt="BG Image"
        style={{ filter: 'blur(6px)' }}
      />
      <form action="https://getform.io/f/8f0dcda9-8871-419a-980f-5d7ca58ab6d3" method='POST' encType='multipart/form-data'>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <div className='grid md:grid-cols-2 gap-4 w-full py-4'>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 text-[#EDF5E1]'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-red-300' type="text" name='name' />
        </div>
        <div className='flex flex-col'>
            <label  className='uppercase text-sm py-2 text-[#EDF5E1]'>Contact Number   </label>
            <input className='border-2 rounded-lg p-3 flex border-red-300' type="text" name='phone' />
        </div>
    </div>
    <div className='flex flex-col py-2'>
        <label  className='uppercase text-sm py-2 text-[#EDF5E1]'>Email</label>
        <input className='border-2 rounded-lg p-3 flex border-red-300' type="email" name='email' />
    </div>

    <div className='flex flex-col py-2'>
        <label  className='uppercase text-sm py-2 text-[#EDF5E1]'>Subject</label>
        <input className='border-2 rounded-lg p-3 flex border-red-300' type="text" name='subject' />
    </div>

    <div className='flex flex-col py-2'>
        <label  className='uppercase text-sm py-2 text-[#EDF5E1]'>Message</label>
        <textarea className='border-2 rounded-lg p-3 flex border-red-300' rows="10" name='message'></textarea>
    </div>
    <button className='bg-[#FF0000] font-bold text-black-100 mt-4 w-full p-4 rounded-lg'>Send Message

    </button>
    </form>
    </div>
  );
};

export default ContactMe;
