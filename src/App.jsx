import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Ear from './components/Ear'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen  text-white">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Ear />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
