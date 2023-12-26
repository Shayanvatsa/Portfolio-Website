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

    </div>
  )
}

export default App