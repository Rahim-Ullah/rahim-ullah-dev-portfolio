import { useState, useEffect } from 'react'
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, years: 0, clients: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const targets = { projects: 60, years: 5, clients: 40 }
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        setCounters({
          projects: Math.floor((targets.projects / steps) * step),
          years: Math.floor((targets.years / steps) * step),
          clients: Math.floor((targets.clients / steps) * step)
        })

        if (step >= steps) {
          setCounters(targets)
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title gradient-text">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="image-border"></div>
              <div className="image-glow"></div>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-heading">
              Passionate <span className="gradient-text">Full Stack Developer</span>
            </h3>
            <p className="about-description">
              I'm a dedicated Full Stack Developer with a passion for creating elegant solutions 
              to complex problems. With expertise spanning from frontend design to backend architecture, 
              I bring ideas to life through clean, efficient code.
            </p>
            <p className="about-description">
              My journey in software development has equipped me with a diverse skill set in modern 
              web technologies. I thrive on challenges and am constantly learning new technologies 
              to stay at the forefront of web development.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Clean & Maintainable Code</span>
              </div>
              <div className="highlight-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>High Performance Solutions</span>
              </div>
              <div className="highlight-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Collaborative Team Player</span>
              </div>
              <div className="highlight-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span>Innovative Problem Solver</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="stat-number gradient-text">{counters.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="stat-number gradient-text">{counters.years}+</div>
            <div className="stat-label">Years Experience</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="stat-number gradient-text">{counters.clients}+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

