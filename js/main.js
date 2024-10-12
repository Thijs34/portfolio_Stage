document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector(".nav");
    const navlist = nav ? nav.querySelectorAll("li") : [];
    const totalNavlist = navlist.length;
    const allSection = document.querySelectorAll(".section");
    const totalSection = allSection.length;

    // Function to handle navigation clicks and active class management
    function handleNavClick(event) {
        const element = event.target;
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavlist; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        element.classList.add("active");
        showSection(element);
        if (window.innerWidth < 1200) {
            asideSectionToggleBtn();
        }
    }

    // Setup event listeners for navigation links
    for (let i = 0; i < totalNavlist; i++) {
        const a = navlist[i].querySelector("a");
        a.addEventListener("click", handleNavClick);
    }

    // Show the target section
    function showSection(element) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }

    // Handle special buttons like "Projects" to trigger section navigation
    const specialButtons = document.querySelectorAll(".btn.contact-me, .btn.contact-me2");
    specialButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const target = this.getAttribute("href");
            const targetNavLink = document.querySelector('.nav a[href="' + target + '"]');
            if (targetNavLink) {
                handleNavClick({ target: targetNavLink });
            }
            window.location.hash = target;
        });
    });

    // Toggling aside and home image for smaller screens
    const navTogglerBtn = document.querySelector(".toggle");
    const aside = document.querySelector("aside");
    const allSections = document.querySelectorAll(".section");
    const homeImgContainer = document.querySelector(".home-img-container");

    navTogglerBtn.addEventListener("click", () => {
        asideSectionToggleBtn();
        toggleHomeImage();
    });

    function asideSectionToggleBtn() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i < allSections.length; i++) {
            allSections[i].classList.toggle("open");
        }
    }

    function toggleHomeImage() {
        if (homeImgContainer) {
            homeImgContainer.classList.toggle("open");
        }
    }

    // Add event listener for the logo to reset to home section
    const logo = document.querySelector(".logo a");
    logo.addEventListener("click", function(event) {
        event.preventDefault();
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        document.querySelector("#home").classList.add("active");
        for (let i = 0; i < totalNavlist; i++) {
            navlist[i].querySelector("a").classList.remove("active");
        }
        const homeNavLink = document.querySelector('.nav a[href="#home"]');
        if (homeNavLink) {
            homeNavLink.classList.add("active");
        }
        if (window.innerWidth < 1200) {
            asideSectionToggleBtn();
        }
        window.location.hash = "#home";
    });

    // Ensure correct section is shown if hash is present in URL
    const hash = window.location.hash;
    if (hash) {
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            targetSection.classList.add('active');
            document.querySelectorAll('.nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(hash)) {
                    link.classList.add('active');
                }
            });
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var type = new Typed('.typing', {
        strings: ['Frontend Developer', 'ICT student', 'Web Designer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: true
    });
});
