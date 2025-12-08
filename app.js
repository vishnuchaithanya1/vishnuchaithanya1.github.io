/* ==================== TOGGLE ICON NAVBAR ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* ==================== REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK LINK ==================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ==================== SCROLL REVEAL ANIMATION ==================== */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.my-img', { origin: 'right' });

ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

ScrollReveal().reveal('.education-box', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.skills-box', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.achievements-box', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.certifications-content', { origin: 'bottom', interval: 80 });
ScrollReveal().reveal('.portfolio-box', { origin: 'bottom', interval: 200 });

ScrollReveal().reveal('.contact form', { origin: 'bottom' });


/* ==================== TYPED JS ==================== */
const typed = new Typed('.multiple-text', {
    strings: [
        'Software Engineer',
        'Passionate AI/ML Enthusiast',
        'Full Stack Developer',
        'Backend Developer',
        'MERN Stack Developer',
        'Web Developer',
        'Java Developer',
        'Cloud Practitioner',
        'DevOps Enthusiast',
        'Problem Solver'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* ==================== NUMBER COUNTER ANIMATION ==================== */
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        let valueDisplay = entry.target;

        if (entry.isIntersecting) {
            let startValue = 0;
            let endValue = parseFloat(valueDisplay.getAttribute("data-val"));
            
            // Detect if decimal
            let isFloat = endValue % 1 !== 0;

            // Calculate step size based on 4 seconds duration
            let duration = 20; 
            let totalSteps = interval / duration;
            let increment = endValue / totalSteps;

            if (valueDisplay.counter) clearInterval(valueDisplay.counter);

            let counter = setInterval(function () {
                startValue += increment;

                if (startValue >= endValue) {
                    startValue = endValue;
                    clearInterval(counter);
                }

                if (isFloat) {
                    valueDisplay.textContent = startValue.toFixed(2);
                } else {
                    valueDisplay.textContent = Math.floor(startValue);
                }
            }, duration);
            
            valueDisplay.counter = counter;
        } 
        else {
            let endValue = parseFloat(valueDisplay.getAttribute("data-val"));
            if (endValue % 1 !== 0) {
                 valueDisplay.textContent = "0.00";
            } else {
                 valueDisplay.textContent = "000";
            }
            if (valueDisplay.counter) clearInterval(valueDisplay.counter);
        }
    });
}, { threshold: 0.5 });

valueDisplays.forEach((valueDisplay) => {
    observer.observe(valueDisplay);
});
