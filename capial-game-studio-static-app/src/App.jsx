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
import HomeStatic from './components/HomeStatic';

function App() {
  return (
    <main className="relative min-h-screen text-white font-montserrat selection:bg-amber-600" >
      
        <VideoBackground />
        <div className="relative z-10" id='Home'>
      
          <HomeStatic />
          <Home />
          <StickyNavbar />
          <AboutUs />
          <Instagram />
          <Projects />
          <Team />
          <Contact />
          <Footer />

        </div>
    
    </main >
  )
}

export default App
