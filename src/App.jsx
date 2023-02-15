import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

  return (
    <main className="text-gray-300 bg-gray-900 h-screen">
      <Navbar />
      <About />
      {/* <Projects />
      <Skills />
      <Contact /> */}
    </main>
  )
}

export default App
