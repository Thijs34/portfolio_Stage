document.addEventListener("DOMContentLoaded", function() { 
    const nav = document.querySelector(".nav");
    const navlist = nav ? nav.querySelectorAll("li") : [];
    const totalNavlist = navlist.length;
    const allSection = document.querySelectorAll(".section");
    const totalSection = allSection.length;
    const navTogglerBtn = document.querySelector(".toggle");
    const aside = document.querySelector("aside");
    const allSections = document.querySelectorAll(".section");
    const homeImgContainer = document.querySelector(".home-img-container");
    const toggleBtn = document.querySelector(".toggle-btn");  // Dark mode/Light mode button
    const languageSwitcher = document.getElementById("languageSwitcher");  // Language switcher element

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
        
        // Close the navigation if screen width is less than 1200
        if (window.innerWidth < 1200) {
            asideSectionToggleBtn();
            handleToggleBtnVisibility();  // Ensure buttons are shown when navigation closes
        }
    }

    for (let i = 0; i < totalNavlist; i++) {
        const a = navlist[i].querySelector("a");
        a.addEventListener("click", handleNavClick);
    }

    function showSection(element) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }

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

            if (window.innerWidth < 900 && aside.classList.contains("open")) {
                asideSectionToggleBtn();
                handleToggleBtnVisibility();  // Ensure buttons are shown when navigation closes
            }
        });
    });

    navTogglerBtn.addEventListener("click", () => {
        asideSectionToggleBtn();
        toggleHomeImage();
        handleToggleBtnVisibility();  // Handle visibility of the toggle button and language switcher
    });

    function asideSectionToggleBtn() {
        const screenWidth = window.innerWidth;

        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");

        for (let i = 0; i < allSections.length; i++) {
            if (screenWidth > 800) {
                allSections[i].classList.toggle("open");
            } else {
                allSections[i].classList.remove("open");
            }
        }
    }

    function toggleHomeImage() {
        if (homeImgContainer) {
            homeImgContainer.classList.toggle("open");
        }
    }

    // Updated function to hide/show language switcher and toggle button
    function handleToggleBtnVisibility() {
        if (window.innerWidth <= 530 && aside.classList.contains("open")) {
            toggleBtn.style.visibility = "hidden";  // Hide dark mode/light mode button
            languageSwitcher.style.visibility = "hidden";  // Hide language switcher
        } else {
            toggleBtn.style.visibility = "visible";  // Show dark mode/light mode button
            languageSwitcher.style.visibility = "visible";  // Show language switcher
        }
    }

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
            handleToggleBtnVisibility();  // Ensure buttons are shown when navigation closes
        }
        window.location.hash = "#home";
    });

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


