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
let interval = 2000;

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        let valueDisplay = entry.target;

        if (entry.isIntersecting) {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            
            let duration = Math.floor(interval / endValue);
            if (duration < 10) duration = 10;

            if (valueDisplay.counter) clearInterval(valueDisplay.counter);

            let counter = setInterval(function () {
                if (endValue > 1000) startValue += 25;
                else startValue += 5;

                if (startValue >= endValue) {
                    startValue = endValue;
                    clearInterval(counter);
                }
                valueDisplay.textContent = startValue;
            }, duration);
            
            valueDisplay.counter = counter;
        } 
        else {
            valueDisplay.textContent = "000";
            if (valueDisplay.counter) clearInterval(valueDisplay.counter);
        }
    });
}, { threshold: 0.5 });

valueDisplays.forEach((valueDisplay) => {
    observer.observe(valueDisplay);
});
