// Initialize Icons and Enhanced Features
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initCookieBanner();
    initSmoothScrolling();
    initParallaxEffects();
    initCinematicEffects();
    initAdvancedAnimations();
});

// Navigation Functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
    
    // Active link highlighting based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Navbar background on scroll with overlap effect
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.85)';
            navbar.style.backdropFilter = 'blur(30px)';
            navbar.style.borderBottom = '1px solid rgba(255, 71, 87, 0.3)';
            navbar.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.7)';
            navbar.style.backdropFilter = 'blur(25px)';
            navbar.style.borderBottom = '1px solid rgba(255, 71, 87, 0.2)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        }
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Special animations for specific elements
                if (entry.target.classList.contains('stats-chart')) {
                    animateChart();
                }
                
                if (entry.target.classList.contains('hero-card')) {
                    animateHeroCard();
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.glass-card, .section-header, .hero-content, .floating-icon');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Chart Animation
function animateChart() {
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.animationPlayState = 'running';
        }, index * 100);
    });
}

// Hero Card Animation
function animateHeroCard() {
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.style.animation = 'float 6s ease-in-out infinite';
    }
}

// Parallax Effects
function initParallaxEffects() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingIcons.forEach((icon, index) => {
            const speed = 0.3 + (index * 0.1);
            icon.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Cookie Banner
function initCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    
    // Show banner if cookies not accepted
    if (!localStorage.getItem('cookies-accepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }
    
    // Accept cookies
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');
        cookieBanner.classList.remove('show');
        
        // Add success feedback
        acceptBtn.innerHTML = '<i data-lucide="check"></i> Accepted';
        acceptBtn.style.background = 'var(--accent-success)';
        
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 500);
    });
}

// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Loading state
            submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Sending...';
            submitBtn.classList.add('loading');
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<i data-lucide="check"></i> Message Sent!';
                submitBtn.style.background = 'var(--accent-success)';
                
                // Reset form
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.classList.remove('loading');
                }, 2000);
            }, 1500);
            
            lucide.createIcons();
        });
    }
});

// Button Interactions
document.addEventListener('click', function(e) {
    if (e.target.closest('.btn')) {
        const btn = e.target.closest('.btn');
        
        // Ripple effect
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for Performance
const performanceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Lazy load or trigger animations only when needed
            const element = entry.target;
            
            if (element.classList.contains('chart-bars')) {
                element.classList.add('animate');
            }
            
            if (element.classList.contains('stats-grid')) {
                const statNumbers = element.querySelectorAll('.stat-number');
                statNumbers.forEach((num, index) => {
                    setTimeout(() => {
                        animateNumber(num);
                    }, index * 200);
                });
            }
        }
    });
}, {
    threshold: 0.5
});

// Observe performance-sensitive elements
document.querySelectorAll('.chart-bars, .stats-grid').forEach(el => {
    performanceObserver.observe(el);
});

// Number Animation
function animateNumber(element) {
    const finalNumber = parseInt(element.textContent);
    const duration = 1000;
    const steps = 60;
    const increment = finalNumber / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= finalNumber) {
            current = finalNumber;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, duration / steps);
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
        
        // Close cookie banner
        const cookieBanner = document.getElementById('cookie-banner');
        if (cookieBanner.classList.contains('show')) {
            cookieBanner.classList.remove('show');
        }
    }
});

// Performance Optimization
let ticking = false;

function updateOnScroll() {
    // Throttle scroll events for better performance
    if (!ticking) {
        requestAnimationFrame(() => {
            // Scroll-based updates here
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateOnScroll);

// Preload Critical Resources
function preloadResources() {
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/lucide.min.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadResources();

// Cinematic Effects
function initCinematicEffects() {
    // Enhanced image loading with cinematic fade-in
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.addEventListener('load', function() {
            heroImage.style.animation = 'cinematic-fade-in 2s ease-out forwards';
        });
        
        // If image is already loaded
        if (heroImage.complete) {
            heroImage.style.animation = 'cinematic-fade-in 2s ease-out forwards';
        }
    }
    
    // Dynamic background parallax for all section backgrounds
    const sectionBackgrounds = document.querySelectorAll('.bg-image');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        sectionBackgrounds.forEach((bg, index) => {
            const rate = scrolled * 0.3;
            bg.style.transform = `translate3d(0, ${rate}px, 0) scale(1.1)`;
        });
    });
    
    // Enhanced glassmorphism on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const glassMorphicElements = document.querySelectorAll('.glass-morphic');
        
        glassMorphicElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrolled;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Calculate visibility percentage
            const visibilityStart = elementTop - windowHeight;
            const visibilityEnd = elementTop + elementHeight;
            const visibilityRange = visibilityEnd - visibilityStart;
            const currentPosition = scrolled + windowHeight;
            const visibilityPercentage = Math.max(0, Math.min(1, 
                (currentPosition - visibilityStart) / visibilityRange
            ));
            
            // Apply dynamic blur and opacity based on visibility
            if (visibilityPercentage > 0 && visibilityPercentage < 1) {
                const blurAmount = 20 + (visibilityPercentage * 10);
                const opacity = 0.03 + (visibilityPercentage * 0.02);
                element.style.backdropFilter = `blur(${blurAmount}px)`;
                element.style.background = `rgba(255, 255, 255, ${opacity})`;
            }
        });
    });
}

// Advanced Animations
function initAdvancedAnimations() {
    // Staggered animations for feature items
    const featureItems = document.querySelectorAll('.feature-item.enhanced');
    featureItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('animate-on-scroll');
    });
    
    // Radar animation enhancement
    const radarDisplay = document.querySelector('.radar-display');
    if (radarDisplay) {
        // Add random radar pings
        setInterval(() => {
            createRadarPing(radarDisplay);
        }, 3000);
    }
    
    // Status bar animation
    const statusFill = document.querySelector('.status-fill');
    if (statusFill) {
        // Animate status bar on load
        setTimeout(() => {
            statusFill.style.width = '95%';
            statusFill.style.transition = 'width 2s ease-out';
        }, 1000);
    }
    
    // Particle system enhancement
    initParticleSystem();
}

// Create random radar pings
function createRadarPing(radarDisplay) {
    const ping = document.createElement('div');
    ping.className = 'radar-ping-effect';
    
    const x = Math.random() * 80 + 10; // 10% to 90%
    const y = Math.random() * 80 + 10;
    
    ping.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: 4px;
        height: 4px;
        background: var(--accent-primary);
        border-radius: 50%;
        animation: radar-ping-effect 2s ease-out forwards;
        transform: translate(-50%, -50%);
    `;
    
    radarDisplay.appendChild(ping);
    
    setTimeout(() => {
        ping.remove();
    }, 2000);
}

// Enhanced particle system
function initParticleSystem() {
    const particleSystem = document.querySelector('.particle-system');
    if (!particleSystem) return;
    
    // Create additional dynamic particles
    setInterval(() => {
        if (document.querySelectorAll('.dynamic-particle').length < 20) {
            createDynamicParticle(particleSystem);
        }
    }, 2000);
}

function createDynamicParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'dynamic-particle';
    
    const x = Math.random() * 100;
    const duration = 15 + Math.random() * 15; // 15-30s
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: 100%;
                 width: 1px;
         height: 1px;
         background: rgba(255, 71, 87, 0.6);
         border-radius: 50%;
         animation: particle-rise ${duration}s linear ${delay}s forwards;
         opacity: 0;
    `;
    
    container.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);
}

// Enhanced button interactions
document.addEventListener('mousemove', function(e) {
    const glassButtons = document.querySelectorAll('.glass-button');
    
    glassButtons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            button.style.transform = `perspective(1000px) rotateX(${deltaY * 5}deg) rotateY(${deltaX * 5}deg) translateZ(10px)`;
        } else {
            button.style.transform = '';
        }
    });
});

// Add CSS for new animations
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
         @keyframes radar-ping-effect {
         0% {
             opacity: 1;
             transform: translate(-50%, -50%) scale(1);
             box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.4);
         }
         100% {
             opacity: 0;
             transform: translate(-50%, -50%) scale(3);
             box-shadow: 0 0 0 20px rgba(255, 71, 87, 0);
         }
     }
    
    .glass-button {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .glass-button:hover {
        transform: translateY(-2px) scale(1.02);
    }
    
    .hero-badge {
        animation: slideInDown 0.8s ease-out 0.5s both;
    }
    
    .section-badge {
        animation: slideInLeft 0.6s ease-out both;
    }
    
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .feature-item.enhanced {
        animation: slideInLeft 0.6s ease-out both;
    }
    
    .display-item {
        animation: fadeInUp 0.6s ease-out both;
    }
    
         .display-item:nth-child(1) { animation-delay: 0.1s; }
     .display-item:nth-child(2) { animation-delay: 0.2s; }
     .display-item:nth-child(3) { animation-delay: 0.3s; }
     .display-item:nth-child(4) { animation-delay: 0.4s; }
     
     @keyframes cinematic-fade-in {
         from {
             opacity: 0;
             filter: blur(3px) brightness(0.8);
             transform: scale(1.05);
         }
         to {
             opacity: 0.2;
             filter: blur(1px) brightness(1);
             transform: scale(1);
         }
     }
     
     .hero-image {
         animation: cinematic-fade-in 3s ease-out forwards;
     }
     
     .bg-image {
         transition: transform 0.1s ease-out;
         will-change: transform;
     }
     
     .glass-morphic {
         position: relative;
         overflow: hidden;
     }
     
     .glass-morphic::after {
         content: '';
         position: absolute;
         top: 0;
         left: -100%;
         width: 100%;
         height: 100%;
         background: linear-gradient(90deg, 
             transparent, 
             rgba(255, 255, 255, 0.1), 
             transparent);
         transition: left 0.8s ease;
     }
     
     .glass-morphic:hover::after {
         left: 100%;
     }
`;
document.head.appendChild(enhancedStyles); 