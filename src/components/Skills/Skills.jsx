import { useState } from 'react'
import './Skills.css'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillsData = {
    frontend: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'Vue.js', level: 90, icon: '💚' },
      { name: 'Angular', level: 85, icon: '🅰️' },
      { name: 'TypeScript', level: 92, icon: '📘' },
      { name: 'JavaScript', level: 95, icon: '📜' },
      { name: 'HTML5/CSS3', level: 98, icon: '🎨' },
      { name: 'Tailwind CSS', level: 93, icon: '🌊' },
      { name: 'Next.js', level: 88, icon: '▲' }
    ],
    backend: [
      { name: 'Node.js', level: 94, icon: '🟢' },
      { name: 'Express.js', level: 92, icon: '🚂' },
      { name: 'Python', level: 88, icon: '🐍' },
      { name: 'Django', level: 85, icon: '🎸' },
      { name: 'PHP', level: 82, icon: '🐘' },
      { name: 'Java', level: 80, icon: '☕' },
      { name: 'Ruby on Rails', level: 78, icon: '💎' },
      { name: 'GraphQL', level: 87, icon: '◆' }
    ],
    database: [
      { name: 'MongoDB', level: 93, icon: '🍃' },
      { name: 'PostgreSQL', level: 90, icon: '🐘' },
      { name: 'MySQL', level: 88, icon: '🐬' },
      { name: 'Redis', level: 85, icon: '🔴' },
      { name: 'Firebase', level: 89, icon: '🔥' },
      { name: 'SQLite', level: 86, icon: '💾' }
    ],
    tools: [
      { name: 'Git', level: 96, icon: '🔀' },
      { name: 'Docker', level: 88, icon: '🐋' },
      { name: 'AWS', level: 85, icon: '☁️' },
      { name: 'Azure', level: 82, icon: '🔷' },
      { name: 'CI/CD', level: 87, icon: '🔄' },
      { name: 'Webpack', level: 84, icon: '📦' },
      { name: 'Jest/Testing', level: 90, icon: '🧪' },
      { name: 'Linux', level: 86, icon: '🐧' }
    ]
  }

  const categories = [
    { id: 'all', label: 'All Skills', icon: '🌟' },
    { id: 'frontend', label: 'Frontend', icon: '💻' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'database', label: 'Database', icon: '🗄️' },
    { id: 'tools', label: 'Tools & DevOps', icon: '🛠️' }
  ]

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillsData).flat()
    }
    return skillsData[activeCategory] || []
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title gradient-text">Technical Skills</h2>
        <p className="section-subtitle">My technical skill set and expertise</p>

        <div className="skills-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {getFilteredSkills().map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


