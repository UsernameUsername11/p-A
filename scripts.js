import { Analytics } from '@vercel/analytics/react';


document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    const navLinkItems = navLinks.querySelectorAll('a[href^="#"]');
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinkItems.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            navLinks.classList.remove('open');
        }
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });
});
