# 🚀 Quick Start Guide

## Getting Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
Navigate to: `http://localhost:5173`

---

## 📝 Quick Customization

### Update Your Info

**1. Personal Details** (`src/components/Hero/Hero.jsx`)
```jsx
// Line 18-20: Update your name and tagline
<h1 className="hero-name">
  <span className="gradient-text">Your Name</span>
</h1>
```

**2. Social Links** (`src/components/Hero/Hero.jsx`)
```jsx
// Line 75-85: Update your social media URLs
<a href="https://github.com/yourusername">...</a>
<a href="https://linkedin.com/in/yourusername">...</a>
```

**3. Contact Info** (`src/components/Contact/Contact.jsx`)
```jsx
// Line 57-82: Update email, phone, location
{
  title: 'Email',
  value: 'your@email.com',
  link: 'mailto:your@email.com'
}
```

**4. Projects** (`src/components/Projects/Projects.jsx`)
```jsx
// Line 5: Replace with your actual projects
const projects = [
  {
    title: 'Your Project',
    description: 'Your project description',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/yourusername/project',
    live: 'https://yourproject.com'
  }
]
```

---

## 🎨 Color Customization

Edit `src/index.css` (starting line 8):

```css
:root {
  /* Change these colors */
  --cyan-main: #06b6d4;    /* Your primary color */
  --purple-main: #a855f7;   /* Your accent color */
}
```

---

## 📦 Build for Production

```bash
npm run build
```

Files will be in `dist/` folder.

---

## 🌐 Deploy Options

### Option 1: Netlify (Easiest)
1. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Done! ✅

### Option 2: Vercel
1. Connect your GitHub repo to Vercel
2. Select "Vite" as framework
3. Deploy! ✅

### Option 3: GitHub Pages
```bash
npm install -D gh-pages

# Add to package.json scripts:
"deploy": "vite build && gh-pages -d dist"

# Deploy:
npm run deploy
```

---

## 🎯 Key Features

✅ Animated loader with progress bar  
✅ Particle background effects  
✅ Skills filtering by category  
✅ Projects filtering by type  
✅ Form validation with error handling  
✅ Smooth scroll animations  
✅ Mobile responsive design  
✅ Theme toggle ready  
✅ SEO optimized  

---

## 💡 Tips

- **Mobile Menu**: Click hamburger icon on mobile
- **Filtering**: Click category buttons in Skills and Projects
- **Contact Form**: Includes validation (try submitting empty)
- **Animations**: Scroll slowly to see all animations
- **Performance**: Particle count adjusts based on screen size

---

## 🐛 Troubleshooting

**Issue**: Port 5173 already in use  
**Solution**: Use different port: `npm run dev -- --port 3000`

**Issue**: Module not found  
**Solution**: Delete `node_modules` and run `npm install` again

**Issue**: Build fails  
**Solution**: Check Node.js version (need v16+)

---

## 📚 Component Overview

| Component | Description | Features |
|-----------|-------------|----------|
| **Navbar** | Navigation bar | Sticky, active highlighting, mobile menu |
| **Hero** | Landing section | Typing effect, code window, social links |
| **About** | About section | Animated counters, morphing image |
| **Skills** | Skills showcase | Filtering, progress bars, categories |
| **Projects** | Portfolio projects | Filtering, hover effects, links |
| **Experience** | Work timeline | Alternating layout, achievements |
| **Contact** | Contact form | Validation, error handling, feedback |
| **Footer** | Site footer | Links, social icons, copyright |

---

## 🔥 Pro Tips

1. **Add Real Images**: Replace icon placeholders with actual photos
2. **Update Content**: Personalize all text content
3. **Add Analytics**: Integrate Google Analytics for tracking
4. **SEO**: Update meta tags in `index.html`
5. **Performance**: Use lazy loading for images
6. **API Integration**: Connect contact form to backend

---

## ⚡ Keyboard Shortcuts

- `Ctrl + C` - Stop dev server
- `Ctrl + Click` - Open link in new tab
- `F12` - Open developer tools

---

## 🎨 Design System

**Spacing**: 1rem = 16px  
**Border Radius**: 12px (cards), 8px (buttons)  
**Transition**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)  
**Font**: System fonts for performance  

---

## 📞 Need Help?

- Check `README.md` for detailed documentation
- View console for errors (F12)
- Check terminal for build errors

---

**Happy Coding! 🚀**

