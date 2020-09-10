import React from 'react'

// components
import { Header } from "./components/Header"
import { About } from "./components/About"
import { Tech } from "./components/Tech"
import { PersonalProjects } from "./components/PersonalProjects"
import { Featured } from "./components/Featured"
import { OtherProjects } from "./components/OtherProjects"
import { Contact } from "./components/Contact"


function App() {
  return (
    <div>
      <Header />
      <About />
      <Tech />
      <PersonalProjects />
      <Featured />
      <OtherProjects />
      <Contact />
    </div>
  )
}

export default App
