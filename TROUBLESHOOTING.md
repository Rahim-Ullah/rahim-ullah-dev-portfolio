# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### 1. Port Already in Use

**Problem**: `Port 5173 is in use, trying another one...`

**Solution**:
```bash
# Use a specific port
npm run dev -- --port 3000

# Or kill the process using port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill -9
```

**Status**: ✅ Already handled - using port 5174

---

### 2. Module Not Found

**Problem**: `Cannot find module 'react'` or similar

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Windows:
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

### 3. Blank Page / White Screen

**Problem**: Page loads but shows nothing

**Checks**:
1. Check browser console (F12) for errors
2. Verify all components are imported correctly
3. Check if JavaScript is enabled

**Solution**:
```bash
# Clear cache and rebuild
npm run build
npm run preview
```

---

### 4. CSS Not Loading

**Problem**: Page has no styling

**Checks**:
1. Verify CSS files are imported in components
2. Check browser console for 404 errors
3. Clear browser cache (Ctrl + Shift + R)

**Solution**:
```bash
# Restart dev server
npm run dev
```

---

### 5. Animations Not Working

**Problem**: Particles or animations not showing

**Checks**:
1. Check if hardware acceleration is enabled in browser
2. Verify canvas support in browser
3. Check console for errors

**Solution**:
- Try a different browser
- Update browser to latest version
- Reduce particle count in ParticlesBackground.jsx

---

### 6. Mobile Menu Not Working

**Problem**: Hamburger menu doesn't open

**Checks**:
1. Check browser console for JavaScript errors
2. Verify viewport meta tag is present
3. Test on different mobile device/emulator

**Solution**:
```jsx
// Check Navbar.jsx state management
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
```

---

### 7. Form Validation Not Working

**Problem**: Form submits without validation

**Checks**:
1. Check Contact.jsx validation logic
2. Verify error states are being set
3. Check browser console for errors

**Solution**:
```jsx
// Ensure handleSubmit has e.preventDefault()
const handleSubmit = async (e) => {
  e.preventDefault()
  // ...validation logic
}
```

---

### 8. Build Fails

**Problem**: `npm run build` fails

**Common Causes**:
- Node version too old (need 16+)
- Memory issues
- Syntax errors in code

**Solution**:
```bash
# Check Node version
node --version  # Should be 16+

# Clear cache and rebuild
npm cache clean --force
rm -rf node_modules dist
npm install
npm run build

# Increase memory limit (if needed)
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

---

### 9. Particles Performance Issues

**Problem**: Page is laggy due to particles

**Solution**:
```jsx
// Edit ParticlesBackground.jsx, line 38
// Reduce particle count
const particleCount = Math.min(
  Math.floor((canvas.width * canvas.height) / 20000), // Increased divisor
  50 // Reduced max count
)
```

---

### 10. ESLint Errors

**Problem**: Linting errors preventing build

**Solution**:
```bash
# Check for errors
npm run lint

# Auto-fix errors
npm run lint -- --fix

# If unfixable, check eslint.config.js
```

---

### 11. Images Not Loading

**Problem**: Images showing as broken

**Solution**:
- Place images in `public/` folder
- Reference as `/image.jpg` (not `./image.jpg`)
- Or import in component: `import img from './image.jpg'`

---

### 12. Scroll Not Smooth

**Problem**: Scroll animations are choppy

**Solution**:
```css
/* Add to index.css if not present */
html {
  scroll-behavior: smooth;
}
```

---

### 13. Theme Toggle Not Working

**Problem**: Light/dark mode doesn't switch

**Check**:
```jsx
// In App.jsx
const [darkMode, setDarkMode] = useState(true)
const toggleTheme = () => setDarkMode(!darkMode)
```

**Note**: Light mode styles are defined but toggle functionality is ready for implementation

---

### 14. Contact Form Not Submitting

**Problem**: Form doesn't send data

**Current Status**: Form has client-side validation only

**To Add Backend**:
```jsx
// In Contact.jsx handleSubmit function
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

---

### 15. Deployment Issues

**Problem**: Site doesn't work after deployment

**Solutions by Platform**:

**Netlify**:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 16+

**Vercel**:
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

**GitHub Pages**:
```bash
# Install gh-pages
npm install -D gh-pages

# Update package.json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

## Quick Diagnostics

### Check Everything
```bash
# 1. Check Node version (should be 16+)
node --version

# 2. Check npm version
npm --version

# 3. Check for errors
npm run lint

# 4. Test build
npm run build

# 5. Preview build
npm run preview
```

### Browser Console Checks
1. Press F12 to open DevTools
2. Go to Console tab
3. Look for red errors
4. Check Network tab for failed requests

### Common Console Errors

**"Cannot read property of undefined"**
- Check if data is loaded before rendering
- Add null checks: `data?.property`

**"Maximum update depth exceeded"**
- Check for infinite loops in useEffect
- Add proper dependencies array

**"Failed to fetch"**
- Check API endpoints
- Verify CORS settings
- Check network connection

---

## Performance Optimization

### If Site is Slow

1. **Reduce Particles**:
```jsx
// ParticlesBackground.jsx
const particleCount = 30 // Lower number
```

2. **Disable Particles on Mobile**:
```jsx
// ParticlesBackground.jsx
if (window.innerWidth < 768) return null
```

3. **Optimize Images**:
- Use WebP format
- Compress images
- Use lazy loading

4. **Reduce Animations**:
```css
/* Add to index.css */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## Development Tips

### Hot Reload Not Working
```bash
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

### Changes Not Reflecting
1. Hard refresh: Ctrl + Shift + R
2. Clear browser cache
3. Check if file is saved
4. Check for syntax errors

### Debugging React
```jsx
// Add console logs
console.log('Component rendered', props)

// Use React DevTools browser extension
// Check component props and state
```

---

## Still Having Issues?

### Checklist
- [ ] Node.js version 16 or higher?
- [ ] All dependencies installed?
- [ ] No linting errors?
- [ ] Browser console clear of errors?
- [ ] Files saved?
- [ ] Dev server running?
- [ ] Correct port in browser?

### Get Help
1. Check browser console (F12)
2. Check terminal for errors
3. Read error messages carefully
4. Search error on Google/Stack Overflow
5. Check STATUS.md for project status

---

## Emergency Reset

If nothing works:

```bash
# Complete clean install
rm -rf node_modules dist package-lock.json
npm cache clean --force
npm install
npm run dev
```

Windows:
```cmd
rmdir /s /q node_modules
rmdir /s /q dist
del package-lock.json
npm cache clean --force
npm install
npm run dev
```

---

**Remember**: The dev server is currently running on **port 5174** ✅

Visit: **http://localhost:5174/**

---

Last Updated: October 24, 2025

