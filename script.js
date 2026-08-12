// ================================
// NOVARA BRAND & BREW
// Website JavaScript
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // MOBILE MENU
    // ================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        // Close menu when clicking a navigation link
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    // ================================
    // SMOOTH SCROLL
    // ================================

    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(link => {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // ================================
    // NAVBAR SCROLL EFFECT
    // ================================

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        });
    }


    // ================================
    // FAQ ACCORDION
    // ================================

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const faqItem = question.parentElement;
            const answer = faqItem.querySelector(".faq-answer");

            // Close other FAQ items
            document.querySelectorAll(".faq-item").forEach(item => {

                if (item !== faqItem) {
                    item.classList.remove("active");

                    const otherAnswer = item.querySelector(".faq-answer");

                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }
                }

            });

            // Toggle current FAQ
            faqItem.classList.toggle("active");

            if (faqItem.classList.contains("active")) {

                if (answer) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }

            } else {

                if (answer) {
                    answer.style.maxHeight = null;
                }

            }

        });

    });


    // ================================
    // CONTACT FORM
    // ================================

    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.querySelector("#name")?.value.trim();
            const email = document.querySelector("#email")?.value.trim();
            const message = document.querySelector("#message")?.value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all required fields.");
                return;
            }

            const whatsappNumber = "923704778105";

            const whatsappMessage =
                `Hello Novara Brand & Brew,%0A%0A` +
                `Name: ${encodeURIComponent(name)}%0A` +
                `Email: ${encodeURIComponent(email)}%0A%0A` +
                `Message:%0A${encodeURIComponent(message)}`;

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

            window.open(whatsappURL, "_blank");

            contactForm.reset();

        });

    }


    // ================================
    // NEWSLETTER FORM
    // ================================

    const newsletterForm = document.querySelector("#newsletterForm");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const emailInput = newsletterForm.querySelector("input[type='email']");

            if (!emailInput || !emailInput.value.trim()) {
                alert("Please enter your email address.");
                return;
            }

            alert("Thank you for subscribing to Novara Brand & Brew!");

            newsletterForm.reset();

        });

    }


    // ================================
    // CURRENT YEAR
    // ================================

    const yearElement = document.querySelector("#currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // ================================
    // SCROLL REVEAL ANIMATION
    // ================================

    const revealElements = document.querySelectorAll(
        ".reveal, .service-card, .about-content, .section-title"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observerInstance.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("show");
        });

    }


    // ================================
    // BACK TO TOP BUTTON
    // ================================

    const backToTop = document.querySelector("#backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // ================================
    // WHATSAPP BUTTON
    // ================================

    const whatsappButtons = document.querySelectorAll(".whatsapp-btn");

    whatsappButtons.forEach(button => {

        button.addEventListener("click", () => {

            const whatsappNumber = "923704778105";

            const message =
                "Hello Novara Brand & Brew! I would like to know more about your café and bakery consulting services.";

            const url =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");

        });

    });


    // ================================
    // SERVICE BUTTONS
    // ================================

    const consultationButtons =
        document.querySelectorAll(".consultation-btn");

    consultationButtons.forEach(button => {

        button.addEventListener("click", () => {

            const whatsappNumber = "923704778105";

            const message =
                "Hello Novara Brand & Brew! I am interested in your consulting services. I would like to book a consultation.";

            const url =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");

        });

    });

});
