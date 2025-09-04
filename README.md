# ShotHawk - Modern Website

A complete rebuild of the ShotHawk website featuring a modern dark theme, glassmorphism effects, minimal animations, and cinematographic design.

## ✨ Features

### Design & Visual
- **Dark Theme**: Modern dark color palette with carefully chosen contrasts
- **Glassmorphism**: Subtle glass-like effects with backdrop blur
- **Minimal Animations**: Smooth, purposeful animations that enhance UX
- **Cinematographic Style**: Clean, professional aesthetic with optical effects
- **Modern Icons**: Lucide icons for crisp, scalable graphics
- **Responsive Design**: Fully responsive across all device sizes

### Technical Features
- **Modern CSS**: CSS Grid, Flexbox, and CSS custom properties
- **Smooth Scrolling**: Native smooth scrolling with offset compensation
- **Intersection Observer**: Performance-optimized scroll animations
- **Mobile Navigation**: Responsive hamburger menu with animations
- **Form Handling**: Interactive contact form with loading states
- **Cookie Banner**: GDPR-compliant cookie notification
- **Performance Optimized**: Throttled scroll events and lazy loading

### User Experience
- **Accessibility**: Focus indicators, keyboard navigation, semantic HTML
- **Interactive Elements**: Hover effects, button ripples, and micro-interactions
- **Loading States**: Visual feedback for user actions
- **Error Handling**: Graceful fallbacks for all interactions

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Open** `index.html` in a modern web browser
3. **No build process required** - pure HTML, CSS, and JavaScript

## 📁 File Structure

```
shothawk/
├── index.html          # Main HTML structure
├── styles.css          # Modern CSS with dark theme
├── script.js          # Interactive JavaScript
└── README.md          # This documentation
```

## 🎨 Design System

### Color Palette
- **Background**: Deep blacks (#0a0a0a, #111111, #1a1a1a)
- **Glass Effects**: Semi-transparent whites with backdrop blur
- **Primary Accent**: Cyan blue (#00d4ff)
- **Secondary Accent**: Ocean blue (#0099cc)
- **Danger/Alert**: Red (#ff4757)
- **Success**: Green (#2ed573)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Scale**: Responsive type scale from 0.75rem to 3rem

### Spacing & Layout
- **Grid System**: CSS Grid with responsive breakpoints
- **Spacing Scale**: 0.25rem to 4rem increments
- **Border Radius**: 0.375rem to 1.5rem scale
- **Shadows**: Layered shadow system with glow effects

## 🔧 Customization

### Colors
Edit CSS custom properties in `:root` section of `styles.css`:

```css
:root {
    --accent-primary: #00d4ff;    /* Primary brand color */
    --accent-secondary: #0099cc;  /* Secondary brand color */
    --bg-primary: #0a0a0a;        /* Main background */
    /* ... more variables */
}
```

### Content
All content can be edited directly in `index.html`. The structure is semantic and well-organized with clear section divisions.

### Animations
Animation timing and effects can be adjusted in `styles.css`:

```css
:root {
    --transition-fast: 0.15s ease-in-out;
    --transition-base: 0.3s ease-in-out;
    --transition-slow: 0.5s ease-in-out;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## 🌟 Key Sections

1. **Hero**: Animated hero section with floating elements
2. **Mission**: Company mission with statistics cards
3. **Vision**: Three-column vision cards with featured center card
4. **Solution**: SPOT system showcase with features
5. **Statistics**: Interactive chart showing rising trends
6. **Partners**: Partner showcase grid
7. **About**: Company values and principles
8. **Contact**: Contact form and information cards

## 🔗 Dependencies

### External Resources
- **Google Fonts**: Inter font family
- **Lucide Icons**: Modern icon library
- **No JavaScript Frameworks**: Pure vanilla JavaScript

### Browser Support
- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Features Used**: CSS Grid, Flexbox, Custom Properties, Backdrop Filter

## 🚀 Performance

- **Optimized Assets**: Minimal external dependencies
- **Efficient Animations**: Hardware-accelerated CSS animations
- **Lazy Loading**: Intersection Observer for performance
- **Throttled Events**: Optimized scroll event handling

## 📞 Contact Integration

The contact form is ready for backend integration. Update the form submission handler in `script.js` to connect to your preferred backend service.

## 🎯 Mission Alignment

This website rebuild maintains the core mission of ShotHawk while presenting it through a modern, professional lens that builds trust and communicates the serious nature of the threat mitigation technology.

---

**Built with care for ShotHawk's mission to protect schools and businesses.** 