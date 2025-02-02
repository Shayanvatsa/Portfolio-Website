import React from 'react';
import { saveAs } from 'file-saver';
import ResumePDF from './Images/Resume.pdf';  // Import the PDF file

const Resume = () => {
  const handleDownload = async () => {
    console.log('Attempting to download:', ResumePDF);

    // Use file-saver to trigger the download
    const response = await fetch(ResumePDF);
    const blob = await response.blob();

    // Convert the blob to data URL
    const dataUrl = URL.createObjectURL(blob);

    // Save the file with the specified name
    saveAs(dataUrl, 'Shayan-Resume.pdf');

    console.log('Download initiated.');
  };

  return (
    <div id='resume' className='w-full h-screen relative'>
      <h1 className='text-4xl font-bold text-center text-[#5CDB95]'>Resume</h1>
      <br></br>
      <body className='text-2xl font-semibold text-white'> Hey there! I am a final-year B. Tech student in Computer Science and Engineering, specializing in cybersecurity. With a 
      passion for both web development and cybersecurity, I continuously explore emerging technologies. Check out the resume below for more information about me.</body>
      <img
        className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'
        src="https://images.unsplash.com/photo-1598812866501-87ad598839e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="BG Image"
      />
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 items-center'>
        {/* Download button */}
        <button
          onClick={handleDownload}
          className='bg-[#5CDB95] text-xl font-bold text-red px-20 py-14 rounded-md shadow-md hover:bg-[#379683] transition duration-300'
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
