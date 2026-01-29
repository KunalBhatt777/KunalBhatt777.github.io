import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import SkillsShowcase from './components/SkillsShowcase'
import Projects from './components/Projects'
import CertificationsPublications from './components/CertificationsPublications'
import Organizations from './components/Organizations'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Resume />
      <SkillsShowcase />
      <Projects />
      <CertificationsPublications />
      <Organizations />
      <Footer />
      <DarkModeToggle />
    </div>
  )
}

export default App

