import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      name: 'WebSociety',
      description: 'A web Based tool that performs Nmap, Steganography and Hashcat',
      githubLink: 'https://github.com/Shayanvatsa/Websociety',
    },
    {
      name: 'Weather App',
      description: 'This WebApp shows Weather of any location using data fetched from openAPI',
      githubLink: 'https://github.com/Shayanvatsa/Weather-App',
    },
    {
      name: 'Other Projects',
      description: 'All the other Projects I did.',
      githubLink: 'https://github.com/Shayanvatsa',
    },
    // Add more projects as needed
  ];

  return (
    <div id='projects' className='w-full h-screen relative'>
      <h1 className='text-4xl font-bold text-center text-[#5CDB95] mb-8'>Projects</h1>
      <img
        className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'
        src="https://images.unsplash.com/photo-1598812866501-87ad598839e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="BG Image"
      />
      <div className='w-[80%] max-w-4xl mx-auto p-8 text-white'>
        <div className='flex justify-between mb-6'>
          <a href="https://github.com/Shayanvatsa" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ cursor: 'pointer', color: 'white' }} size={20} />
          </a>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='p-4 border border-white rounded-md text-white transition-transform transform hover:scale-105'
            >
              <h2 className='text-xl font-bold mb-2'>{project.name}</h2>
              <p>{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className='text-blue-300 hover:underline'
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
