import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Loader from './components/Loader/Loader'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <ParticlesBackground />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
