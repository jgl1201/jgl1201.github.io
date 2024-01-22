import { domManipulator } from './domManipulator';

export function setupScrollHandler() {
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-items a");

        window.addEventListener("scroll", function () {
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (pageYOffset >= sectionTop - sectionHeight / 2) {
                    currentSection = section.getAttribute("id");
                }
            });

            // Utiliza el objeto domManipulator para manipular el DOM
            domManipulator.setActiveLink(navLinks, currentSection);
        });
    });
}