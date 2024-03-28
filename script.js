// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Select the button element
    const changeColorButton = document.querySelector("#change-color-button");

    // Add a click event listener to the button
    changeColorButton.addEventListener("click", function() {
        // Generate random RGB values for the background color
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);

        // Set the background color of the body to the random color
        document.body.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    });
});

// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to carousel control buttons to pause carousel on hover
    const carouselControlPrev = document.querySelector(".carousel-control-prev");
    const carouselControlNext = document.querySelector(".carousel-control-next");
    const carousel = document.querySelector("#carouselExampleCaptions");

    carouselControlPrev.addEventListener("mouseenter", function() {
        carousel.classList.add("paused");
    });

    carouselControlNext.addEventListener("mouseenter", function() {
        carousel.classList.add("paused");
    });

    carouselControlPrev.addEventListener("mouseleave", function() {
        carousel.classList.remove("paused");
    });

    carouselControlNext.addEventListener("mouseleave", function() {
        carousel.classList.remove("paused");
    });
});

// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll functionality for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(scrollLink => {
        scrollLink.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Modal functionality for "Register Now" button
    const registerModalButton = document.querySelector('[data-bs-target="#exampleModal"]');
    registerModalButton.addEventListener("click", function() {
        const modalTitle = document.querySelector("#exampleModalLabel");
        modalTitle.textContent = "Are you ready to join with us?";
    });

    // Pause carousel on hover
    const carouselControlPrev = document.querySelector(".carousel-control-prev");
    const carouselControlNext = document.querySelector(".carousel-control-next");
    const carousel = document.querySelector("#carouselExampleCaptions");

    carouselControlPrev.addEventListener("mouseenter", function() {
        carousel.classList.add("paused");
    });

    carouselControlNext.addEventListener("mouseenter", function() {
        carousel.classList.add("paused");
    });

    carouselControlPrev.addEventListener("mouseleave", function() {
        carousel.classList.remove("paused");
    });

    carouselControlNext.addEventListener("mouseleave", function() {
        carousel.classList.remove("paused");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Gallery slider functionality
    const feedbackGalleryItems = document.querySelectorAll('.feedback-glry-items');
    feedbackGalleryItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('active');
            if (index > 0) {
                feedbackGalleryItems[index - 1].classList.add('prev');
            }
            if (index < feedbackGalleryItems.length - 1) {
                feedbackGalleryItems[index + 1].classList.add('next');
            }
        });
        item.addEventListener('mouseleave', function() {
            this.classList.remove('active');
            if (index > 0) {
                feedbackGalleryItems[index - 1].classList.remove('prev');
            }
            if (index < feedbackGalleryItems.length - 1) {
                feedbackGalleryItems[index + 1].classList.remove('next');
            }
        });
    });

    // Initialize tooltip for star ratings
    const starRatings = document.querySelectorAll('.fedk-hdr-rght .fas');
    starRatings.forEach(star => {
        star.addEventListener('mouseenter', function() {
            const index = parseInt(this.dataset.index);
            starRatings.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('text-warning');
                    s.classList.remove('far');
                } else {
                    s.classList.remove('text-warning');
                    s.classList.add('far');
                }
            });
        });
    });

    // Reset star ratings on mouse leave
    const fedbkHeaders = document.querySelectorAll('.fedbk-header');
    fedbkHeaders.forEach(header => {
        header.addEventListener('mouseleave', function() {
            starRatings.forEach(star => {
                star.classList.remove('text-warning');
                star.classList.add('far');
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close navbar collapse menu when clicking outside
    const navbarCollapse = document.querySelector('.navbar-collapse');
    document.addEventListener('click', function(e) {
        if (!navbarCollapse.contains(e.target)) {
            navbarCollapse.classList.remove('show');
        }
    });

    // Toggle active class on navbar links
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
