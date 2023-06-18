import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certification from './components/Certification'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Header/>
      <Skills/>
      <Projects/>
      <Certification/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
