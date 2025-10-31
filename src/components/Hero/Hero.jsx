import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = 'Full Stack Developer'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting animate-fadeIn">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-name animate-fadeInUp">
              <span className="gradient-text">Professional</span>
            </h1>
            
            <div className="hero-title animate-fadeInUp">
              <h2>
                {text}
                <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
              </h2>
            </div>
            
            <p className="hero-description animate-fadeInUp">
              Crafting scalable, high-performance web applications with cutting-edge 
              technologies. Specialized in React, Node.js, and cloud architecture.
            </p>
            
            <div className="hero-buttons animate-fadeInUp">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 8L10 13L17 8M3 8L10 3L17 8M3 8V15L10 20L17 15V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="hero-social animate-fadeIn">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="mailto:dev@email.com" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="hero-visual animate-fadeIn">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                <span className="window-title">portfolio.js</span>
                <div className="window-icons">
                  <span>⚙️</span>
                  <span>✖️</span>
                </div>
              </div>
              <div className="code-content">
                <pre><code><span className="line-number">1</span><span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
<span className="line-number">2</span>  <span className="code-property">name</span>: <span className="code-string">'Full Stack Dev'</span>,
<span className="line-number">3</span>  <span className="code-property">role</span>: <span className="code-string">'Software Engineer'</span>,
<span className="line-number">4</span>  <span className="code-property">skills</span>: [
<span className="line-number">5</span>    <span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, 
<span className="line-number">6</span>    <span className="code-string">'TypeScript'</span>, <span className="code-string">'MongoDB'</span>
<span className="line-number">7</span>  ],
<span className="line-number">8</span>  <span className="code-property">passion</span>: <span className="code-string">'Building Amazing Apps'</span>,
<span className="line-number">9</span>  <span className="code-function">code</span>: () =&gt; {'{'}
<span className="line-number">10</span>    <span className="code-keyword">return</span> <span className="code-string">'Clean & Scalable'</span>;
<span className="line-number">11</span>  {'}'}
<span className="line-number">12</span>{'}'};
<span className="line-number">13</span>
<span className="line-number">14</span><span className="code-comment">// Let's build something great! 🚀</span></code></pre>
              </div>
            </div>
            
            <div className="floating-elements">
              <div className="floating-icon" style={{animationDelay: '0s'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.812-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
              </div>
              <div className="floating-icon" style={{animationDelay: '0.5s'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1c6.065 0 11 4.935 11 11s-4.935 11-11 11S1 18.065 1 12 5.935 1 12 1zm0 1.5c-5.237 0-9.5 4.263-9.5 9.5s4.263 9.5 9.5 9.5 9.5-4.263 9.5-9.5-4.263-9.5-9.5-9.5zm2.48 8.5l3.519 5.028h-2.118l-2.881-4.115V16h-2V8h2v3.115L15.881 8H18l-3.52 3z"/>
                </svg>
              </div>
              <div className="floating-icon" style={{animationDelay: '1s'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 12v12h24V0H0zm19.672-.297c.347.096.638.25.89.467.25.22.42.467.534.74.114.277.172.55.172.824 0 .252-.053.5-.158.747-.105.246-.263.462-.474.65-.21.186-.47.336-.776.45-.307.113-.653.17-1.04.17-.387 0-.733-.057-1.04-.17-.306-.114-.565-.264-.775-.45-.212-.188-.37-.404-.476-.65-.105-.247-.158-.495-.158-.748 0-.273.058-.547.172-.823.114-.273.284-.52.534-.74.252-.218.543-.37.89-.467.346-.096.72-.145 1.12-.145s.774.05 1.12.145zm-9.672-.35c.253 0 .504.03.75.088.247.058.468.15.663.275s.35.282.465.47c.114.188.172.408.172.66 0 .358-.094.665-.282.92-.187.256-.44.476-.758.66l2.79 3.574h-1.896l-2.48-3.18h-.908v3.18h-1.63V11.353h2.115z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
              <path d="M10 5V25M10 25L5 20M10 25L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

