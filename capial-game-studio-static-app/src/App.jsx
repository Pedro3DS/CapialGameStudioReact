import { useState } from 'react'
import VideoBackground from './components/VideoBackground'
import StickyNavbar from './components/StickyNavbar'
import { LanguageProvider } from './i18n/LanguageContext';
import AboutUs from './components/AboutUs'
import Instagram from './components/Instagram'
import Projects from './components/Projects'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home';

function App() {
  return (
    <main className="relative min-h-screen text-white font-montserrat selection:bg-amber-600" >
      <LanguageProvider>
        <VideoBackground />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#222] from-[0.5vh] via-transparent to-[#111]"></div> */}

        <div className="relative z-10" id='Home'>
          <Home/>
          <StickyNavbar />
          <AboutUs />
          <Instagram />
          <Projects />
          <Team />
          <Contact />
          <Footer />

        </div>
      </LanguageProvider >
    </main >
  )
}

export default App
