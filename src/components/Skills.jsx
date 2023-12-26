import React from 'react';

const Skills = () => {
  const skillsData = [
    'HTML',
    'CSS',
    'C',
    'C++',
    'JAVA',
    'Python',
    'Javascript',
    'React.js',
    'Vite',
    'Express.js',
    'Angular CLI',
    'Tailwind CSS',
    'Bootstrap',
    'Kali Linux',
    'Ethical Hacking',
    'Node.js',
  ];

  return (
    <div id='skills' className='w-full h-screen relative flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-center text-[#5CDB95] mb-8'>Skills</h1>
      <img
        className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'
        src="https://images.unsplash.com/photo-1598812866501-87ad598839e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="BG Image"
      />
      <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-70 z-[-1]'></div>
      <div className='w-[80%] max-w-4xl mx-auto p-8 text-white'>
        <div className='grid grid-cols-4 gap-4'>
          {skillsData.map((skill, index) => (
            <div key={index} className='p-4 border border-white rounded-md text-center transition-transform transform hover:shadow-lg hover:scale-105'>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
