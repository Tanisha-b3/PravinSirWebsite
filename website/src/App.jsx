import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import About from './components/about'
import Contact from './components/contact'
import Hero from './components/hero'
import Footer from './components/footer'

function App() {

  return (
    <>
      <div>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer/>
       </div>
    </>
  )
}

export default App
