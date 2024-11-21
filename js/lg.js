// lg.js

function toggleDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('show');

    // Get the current language and hide/show the appropriate option
    const selectedLanguage = document.getElementById('selectedLanguage').textContent;
    const englishOption = document.querySelector('.language-option[data-lang="en"]');
    const dutchOption = document.querySelector('.language-option[data-lang="nl"]');
    
    if (selectedLanguage === 'EN') {
        englishOption.style.display = 'none'; // Hide English if selected
        dutchOption.style.display = 'flex';   // Show Dutch
    } else {
        englishOption.style.display = 'flex'; // Show English
        dutchOption.style.display = 'none';   // Hide Dutch if selected
    }
}

// Function to handle language selection
function selectLanguage(lang) {
    const selectedLanguage = document.getElementById('selectedLanguage');
    const selectedFlag = document.getElementById('selectedFlag');
    
    // Update the language and flag based on selection
    if (lang === 'en') {
        selectedLanguage.textContent = 'EN';
        selectedFlag.src = 'images/english.png';
    } else if (lang === 'nl') {
        selectedLanguage.textContent = 'NL';
        selectedFlag.src = 'images/dutch.png';
    }
    
    // Save selected language to localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Close the dropdown after selection
    document.getElementById('languageDropdown').classList.remove('show');

    // Translate the page based on the selected language
    translatePage();
}

// Load selected language from localStorage when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    
    if (savedLanguage) {
        // If there's a saved language, use it
        selectLanguage(savedLanguage);
    } else {
        // Default to Dutch if no language is saved
        selectLanguage('nl');
    }
});
