# Professional Full Stack Developer Portfolio 🚀

A modern, feature-rich portfolio website built with **React + Vite** featuring a stunning **cyan-purple** color scheme, particle effects, smooth animations, and fully responsive design.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

### 🎨 Design & UI
- **Professional Cyan-Purple Theme** with gradient accents
- **Dark/Light Mode Toggle** (currently dark mode)
- **Glassmorphism Effects** with backdrop blur
- **Smooth Animations** and transitions throughout
- **Particle Background** with animated connections
- **Morphing Shapes** and floating elements
- **Mobile-First** responsive design

### 🚀 Advanced Functionality
- **Animated Loader** with progress bar
- **Sticky Navigation** with active section highlighting
- **Mobile Hamburger Menu** with smooth transitions
- **Skills Filtering** by category (Frontend, Backend, Database, Tools)
- **Projects Filtering** by type (Full Stack, Frontend, Backend, Mobile)
- **Animated Counters** in About section
- **Timeline Experience** section with alternating layout
- **Form Validation** in Contact section
- **Scroll to Top** button with smooth scroll
- **Typing Effect** in Hero section
- **Interactive Cards** with hover effects

### 💻 Technical Highlights
- Built with **React 19** and **Vite**
- Component-based architecture
- Custom CSS with CSS Variables
- Intersection Observer API for scroll animations
- Canvas API for particle effects
- Form validation with error handling
- Fully accessible (ARIA labels)
- SEO friendly
- Performance optimized

## 📁 Project Structure

```
Techfolio/
├── vanilla/                    # Original HTML/CSS/JS version
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
├── src/
│   ├── components/
│   │   ├── Navbar/            # Navigation with theme toggle
│   │   ├── Hero/              # Hero section with code window
│   │   ├── About/             # About with animated stats
│   │   ├── Skills/            # Skills with filtering
│   │   ├── Projects/          # Projects with filtering
│   │   ├── Experience/        # Timeline experience
│   │   ├── Contact/           # Contact form with validation
│   │   ├── Footer/            # Footer with links
│   │   ├── ParticlesBackground/ # Animated particles
│   │   ├── ScrollToTop/       # Scroll to top button
│   │   └── Loader/            # Loading screen
│   ├── App.jsx               # Main app component
│   ├── App.css               # Global app styles
│   ├── index.css             # CSS variables & utilities
│   └── main.jsx              # Entry point
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Techfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Color Scheme

The portfolio uses a professional cyan-purple color palette:

### Primary Colors
- **Cyan Light**: `#22d3ee`
- **Cyan Main**: `#06b6d4`
- **Cyan Dark**: `#0891b2`
- **Purple Light**: `#c084fc`
- **Purple Main**: `#a855f7`
- **Purple Dark**: `#9333ea`

### Background Colors
- **Primary**: `#0a0b1e`
- **Secondary**: `#12132b`
- **Card**: `#1a1b38`
- **Hover**: `#252647`

### Gradients
```css
--gradient-primary: linear-gradient(135deg, #06b6d4 0%, #a855f7 100%);
--gradient-secondary: linear-gradient(135deg, #22d3ee 0%, #c084fc 100%);
```

## 📝 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero/Hero.jsx`)
   - Update name, title, and description
   - Change social media links

2. **About Section** (`src/components/About/About.jsx`)
   - Modify bio text
   - Update statistics (projects, years, clients)

3. **Skills Section** (`src/components/Skills/Skills.jsx`)
   - Add/remove skills
   - Update skill levels
   - Modify categories

4. **Projects Section** (`src/components/Projects/Projects.jsx`)
   - Add your projects
   - Update project details
   - Add GitHub and live links

5. **Experience Section** (`src/components/Experience/Experience.jsx`)
   - Add your work experience
   - Update company details
   - Modify achievements

6. **Contact Section** (`src/components/Contact/Contact.jsx`)
   - Update contact information
   - Configure form submission endpoint

### Modify Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --cyan-main: #06b6d4;
  --purple-main: #a855f7;
  /* ... modify other colors */
}
```

### Add New Sections

1. Create component folder in `src/components/`
2. Create JSX and CSS files
3. Import and add to `src/App.jsx`
4. Update navigation in `src/components/Navbar/Navbar.jsx`

## 🎯 Key Components

### Navbar
- Fixed position with blur effect
- Active section highlighting
- Mobile responsive menu
- Theme toggle button

### Hero
- Typing animation
- Animated code window
- Floating tech icons
- Scroll indicator

### About
- Animated counter
- Morphing profile image
- Highlight cards
- Stats section

### Skills
- Category filtering
- Progress bars
- Hover animations
- Icon-based design

### Projects
- Category filtering
- Hover overlays
- Tech stack tags
- Project links

### Experience
- Timeline layout
- Alternating sides (desktop)
- Achievement lists
- Animated dots

### Contact
- Form validation
- Error handling
- Success feedback
- Contact cards

### Particles Background
- Canvas-based animation
- Dynamic particle count
- Connection lines
- Performance optimized

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 768px
- **Small Mobile**: 360px - 480px

## ⚡ Performance

- Lazy loading ready
- Optimized animations
- Debounced scroll events
- Efficient particle rendering
- Minimal dependencies
- Code splitting ready

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📦 Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your repository
2. Framework: Vite
3. Deploy

### GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🛠️ Technologies Used

- **React 19.1.1** - UI Library
- **Vite 7.1.7** - Build Tool
- **CSS3** - Styling with custom properties
- **Canvas API** - Particle effects
- **Intersection Observer API** - Scroll animations
- **ES6+** - Modern JavaScript

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📧 Contact

- **Email**: developer@email.com
- **Portfolio**: [Your Portfolio URL]
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Font Awesome for icons
- React community for inspiration
- All open source contributors

---

**Built with 💙 and 💜 by a Full Stack Developer**
