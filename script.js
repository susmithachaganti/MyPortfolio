/* =========================================================
   SUSMITHA CHAGANTI — PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


const sectionObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-container, .education-card, .skill-card, .internship-card, .featured-project, .project-card, .publication-card, .certificate-card, .resume-container, .contact-card"
    );


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   TYPING EFFECT
   ========================================================= */

const heroTitle = document.querySelector(".hero h2");


const typingWords = [
    "Java Full Stack Learner",
    "Software Developer",
    "Data & ML Enthusiast",
    "Problem Solver"
];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


/*
   Create typing element
*/

const typingElement =
    document.createElement("div");


typingElement.className = "typing-text";


typingElement.style.marginTop = "18px";

typingElement.style.fontFamily =
    '"Space Mono", monospace';

typingElement.style.fontSize = "15px";

typingElement.style.color =
    "var(--primary)";


heroTitle.after(typingElement);


/* Typing function */

function typeEffect() {

    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        characterIndex++;

        typingElement.textContent =
            "> " +
            currentWord.substring(
                0,
                characterIndex
            );

    } else {

        characterIndex--;

        typingElement.textContent =
            "> " +
            currentWord.substring(
                0,
                characterIndex
            );

    }


    let speed = deleting ? 45 : 75;


    if (
        !deleting &&
        characterIndex === currentWord.length
    ) {

        speed = 1400;

        deleting = true;

    }


    else if (
        deleting &&
        characterIndex === 0
    ) {

        deleting = false;

        wordIndex++;

        if (wordIndex >= typingWords.length) {

            wordIndex = 0;

        }

        speed = 300;

    }


    setTimeout(typeEffect, speed);

}


typeEffect();


/* =========================================================
   PROFILE IMAGE FALLBACK
   ========================================================= */

const profileImages =
    document.querySelectorAll(
        '.profile-circle img'
    );


profileImages.forEach(image => {

    image.addEventListener(
        "error",
        () => {

            image.style.display = "none";

            const fallback =
                document.createElement("div");

            fallback.textContent = "SC";

            fallback.style.width = "100%";

            fallback.style.height = "100%";

            fallback.style.display = "grid";

            fallback.style.placeItems = "center";

            fallback.style.fontSize = "40px";

            fallback.style.fontWeight = "700";

            fallback.style.color =
                "var(--primary)";

            fallback.style.background =
                "var(--primary-light)";

            image.parentElement.appendChild(
                fallback
            );

        }
    );

});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const footer =
    document.querySelector("footer");

if (footer) {

    footer.innerHTML =
        `<p>© ${new Date().getFullYear()} Susmitha Chaganti. All Rights Reserved.</p>`;

}