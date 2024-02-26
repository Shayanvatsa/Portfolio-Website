import { useState } from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Skills from './components/Skills'
import Project from './components/project'
import Resume from './components/resume'
import Contact from './components/contact'
function App(){

  return(
    <div>
      <NavBar />
      <Main />
      <Skills />
      <Project />
      <Resume />
      <Contact />
      <div className="bg-slate-800 text-center py-5 text-2xl font-semibold text-red-500">
      © Shayan Vatsa - All rights reserved, 2024.
      </div>
    </div>
  )
}

export default App