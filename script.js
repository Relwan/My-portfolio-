// GSAP Animations
gsap.from('nav', { y: -100, opacity: 0, duration: 1, ease: 'power2.out' });

gsap.from('#about img', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
    },
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: 'power2.out'
});

gsap.utils.toArray('section').forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.skill-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
        },
        opacity: 0,
        x: i % 2 === 0 ? -100 : 100,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.social-links a').forEach((link, i) => {
    gsap.from(link, {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'back.out(1.7)'
    });
});

gsap.from('.cv-download a', {
    scrollTrigger: {
        trigger: '.cv-download',
        start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});