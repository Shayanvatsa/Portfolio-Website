import React from 'react';

const ContactMe = () => {
  return (
    <div id='contact' className='w-full h-screen flex flex-col items-center justify-center relative'>
      <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-70 z-[-1]'></div>
      <form
        action="https://getform.io/f/8f0dcda9-8871-419a-980f-5d7ca58ab6d3"
        method='POST'
        encType='multipart/form-data'
        className='w-[80%] max-w-md bg-black bg-opacity-50 text-white p-8 rounded-lg shadow-md'
        style={{
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 0, 0, 0.5)',
        }}
      >
        <h1 className='text-4xl font-bold text-center mb-4'>Contact Me</h1>
        <img
          className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'
          src="https://images.unsplash.com/photo-1598812866501-87ad598839e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="BG Image"
        />

        <div className='grid md:grid-cols-2 gap-4 w-full py-4'>
          <div className='flex flex-col'>
            <label htmlFor="name" className='uppercase text-sm py-2 font-bold'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-red-300 text-black' type="text" name='name' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="phone" className='uppercase text-sm py-2 font-bold'>Contact Number</label>
            <input className='border-2 rounded-lg p-3 flex border-red-300 text-black' type="text" name='phone' />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label htmlFor="email" className='uppercase text-sm py-2 font-bold'>Email</label>
          <input className='border-2 rounded-lg p-3 flex border-red-300 text-black' type="email" name='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label htmlFor="subject" className='uppercase text-sm py-2 font-bold'>Subject</label>
          <input className='border-2 rounded-lg p-3 flex border-red-300 text-black' type="text" name='subject' />
        </div>
        <div className='flex flex-col py-2'>
          <label htmlFor="message" className='uppercase text-sm py-2 font-bold'>Message</label>
          <textarea className='border-2 rounded-lg p-3 flex border-red-300 text-black' rows="6" name='message'></textarea>
        </div>
        <button className='bg-[#FF0000] font-bold text-white mt-4 w-full p-4 rounded-lg'>Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
