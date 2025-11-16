// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ======================
// Header Scroll Behavior
// ======================
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ======================
// Scroll Timer
// ======================
const timerElement = document.querySelector('.timer-value');
let scrollStartTime = Date.now();

function updateTimer() {
    const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const elapsedSeconds = Math.floor(scrollProgress * 100); // Scale to reasonable time
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    if (timerElement) {
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

window.addEventListener('scroll', updateTimer);
updateTimer();

// ======================
// Hero Section Animations
// ======================
const heroTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: false
    }
});

// Animate floating cards with stagger
heroTimeline
    .to('.floating-card-1', { y: -100, opacity: 0, duration: 1 }, 0)
    .to('.floating-card-2', { y: -80, opacity: 0, duration: 1 }, 0.1)
    .to('.floating-card-3', { y: -60, opacity: 0, duration: 1 }, 0.2)
    .to('.hero-right-image', { y: '30%', duration: 1 }, 0)
    .to('.hero-headline', { opacity: 0.3, scale: 0.95, duration: 1 }, 0)
    .to('.hero-bottom', { opacity: 0, y: 20, duration: 1 }, 0.3);

// ======================
// Mission Section Reveal
// ======================
gsap.from('.mission-text', {
    scrollTrigger: {
        trigger: '.mission-section',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1
    },
    x: 100,
    opacity: 0
});

// ======================
// Services Cards Stagger Animation
// ======================
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '.services-section',
        start: 'top 70%',
        end: 'top 20%',
        scrub: 1
    },
    y: 100,
    opacity: 0,
    stagger: 0.15
});

// Animate service numbers
gsap.from('.service-number', {
    scrollTrigger: {
        trigger: '.services-section',
        start: 'top 60%',
        end: 'top 10%',
        scrub: 1
    },
    scale: 1.5,
    opacity: 0,
    stagger: 0.1
});

// ======================
// Featured Work Section
// ======================
gsap.from('.work-title', {
    scrollTrigger: {
        trigger: '.featured-work-section',
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1
    },
    x: -100,
    opacity: 0
});

gsap.from('.laptop-mockup', {
    scrollTrigger: {
        trigger: '.featured-work-section',
        start: 'top 70%',
        end: 'top 30%',
        scrub: 1
    },
    y: 100,
    opacity: 0,
    scale: 0.9
});

// ======================
// Circular Scroll Progress Indicator
// ======================
const circle = document.querySelector('.progress-ring-circle');
if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    function updateProgress() {
        const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const offset = circumference - (scrollPercent * circumference);
        circle.style.strokeDashoffset = offset;
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    // Rotate the circular preview image as user scrolls
    gsap.to('.circular-preview img', {
        scrollTrigger: {
            trigger: '.featured-work-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        rotation: 360,
        ease: 'none'
    });
}

// ======================
// Background Transitions
// ======================
const bgSections = [
    { trigger: '.hero-section', bg: 'floral' },
    { trigger: '.mission-section', bg: 'floral' },
    { trigger: '.services-section', bg: 'concrete' },
    { trigger: '.featured-work-section', bg: 'neutral' },
    { trigger: '.footer-spacer', bg: 'neutral' }
];

bgSections.forEach(({ trigger, bg }) => {
    ScrollTrigger.create({
        trigger: trigger,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setBackground(bg),
        onEnterBack: () => setBackground(bg)
    });
});

function setBackground(bgName) {
    document.querySelectorAll('.section-background').forEach(bgEl => {
        if (bgEl.dataset.bg === bgName) {
            bgEl.classList.add('active');
        } else {
            bgEl.classList.remove('active');
        }
    });
}

// ======================
// Page Transition Effect
// ======================
function navigateWithTransition(url) {
    const transition = document.querySelector('.page-transition');
    transition.classList.add('active');

    setTimeout(() => {
        transition.classList.remove('active');
        transition.classList.add('exiting');

        setTimeout(() => {
            transition.classList.remove('exiting');
            // In a real implementation, you would navigate here
            // window.location.href = url;
            alert('Page transition effect! In a real site, this would navigate to: ' + url);
        }, 800);
    }, 800);
}

// Make function globally available
window.navigateWithTransition = navigateWithTransition;

// ======================
// Footer CTA Animation
// ======================
gsap.from('.footer-content h2', {
    scrollTrigger: {
        trigger: '.footer-spacer',
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1
    },
    y: 50,
    opacity: 0
});

gsap.from('.cta-button', {
    scrollTrigger: {
        trigger: '.footer-spacer',
        start: 'top 70%',
        end: 'top 30%',
        scrub: 1
    },
    scale: 0.8,
    opacity: 0
});

// ======================
// Parallax Effect on Hero Image
// ======================
gsap.to('.hero-right-image', {
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    backgroundPosition: '50% 100%'
});

// ======================
// Smooth Scroll Enhancement
// ======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#contact' && href !== '#work' && href !== '#about' && href !== '#project') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ======================
// Performance Optimizations
// ======================

// Add will-change to animated elements when they're about to animate
const animatedElements = document.querySelectorAll('.floating-card, .service-card, .mission-text');
animatedElements.forEach(el => {
    ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => {
            el.style.willChange = 'transform, opacity';
        },
        onLeave: () => {
            el.style.willChange = 'auto';
        },
        onEnterBack: () => {
            el.style.willChange = 'transform, opacity';
        },
        onLeaveBack: () => {
            el.style.willChange = 'auto';
        }
    });
});

// ======================
// Loading Animation
// ======================
window.addEventListener('load', () => {
    gsap.from('.logo', {
        duration: 1,
        opacity: 0,
        y: -20,
        ease: 'power3.out'
    });

    gsap.from('.hero-headline', {
        duration: 1.2,
        opacity: 0,
        y: 30,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.floating-card', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.15,
        delay: 0.5,
        ease: 'back.out(1.7)'
    });
});

// ======================
// Responsive Adjustments
// ======================
const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleResponsive(e) {
    if (e.matches) {
        // Disable or reduce parallax effects on mobile for better performance
        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.vars.scrub) {
                trigger.vars.scrub = 0.5; // Reduce scrub intensity on mobile
            }
        });
    }
}

mediaQuery.addListener(handleResponsive);
handleResponsive(mediaQuery);

// ======================
// Debug Info (Remove in production)
// ======================
console.log('🎨 Made In UX Studio - Scroll Animations Initialized');
console.log('📊 Active ScrollTriggers:', ScrollTrigger.getAll().length);

// Optional: Add markers for debugging (uncomment to see scroll trigger points)
// ScrollTrigger.getAll().forEach(trigger => {
//     trigger.vars.markers = true;
// });
