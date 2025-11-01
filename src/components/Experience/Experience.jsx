import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Leading development of enterprise-level web applications and mentoring junior developers.',
      achievements: [
        'Led team of 6 developers on flagship product',
        'Improved application performance by 65%',
        'Implemented microservices architecture',
        'Reduced deployment time by 80% with CI/CD'
      ],
      icon: '🚀'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2021 - 2023',
      description: 'Developed and maintained multiple client projects using modern web technologies.',
      achievements: [
        'Built 20+ production-ready applications',
        'Integrated third-party APIs and payment systems',
        'Implemented comprehensive testing strategies',
        'Mentored 3 junior developers'
      ],
      icon: '💼'
    },
    {
      id: 3,
      title: 'Junior Full Stack Developer',
      company: 'StartUp Hub',
      period: '2020 - 2021',
      description: 'Contributed to various web development projects focusing on frontend and backend integration.',
      achievements: [
        'Developed responsive user interfaces',
        'Created RESTful APIs with Node.js',
        'Collaborated with design and QA teams',
        'Maintained 99% code quality score'
      ],
      icon: '💻'
    },
    {
      id: 4,
      title: 'Web Development Intern',
      company: 'Creative Agency',
      period: '2019 - 2020',
      description: 'Assisted in building client websites and learned modern web development practices.',
      achievements: [
        'Assisted in 10+ client projects',
        'Learned React, Node.js, and MongoDB',
        'Improved page load times by 40%',
        'Received "Outstanding Intern" award'
      ],
      icon: '🎓'
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title gradient-text">Work Experience</h2>
        <p className="section-subtitle">My professional journey and achievements</p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot">
                <span className="dot-icon">{exp.icon}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience


