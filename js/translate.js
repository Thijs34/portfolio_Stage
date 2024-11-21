// translate.js
let isDutch = false; // Language state tracker

// Function to underline the first word of project titles
function underlineFirstWord() {
    const projectTitles = document.querySelectorAll('.projects_name');

    projectTitles.forEach((title) => {
        const titleHTML = title.innerHTML.trim();
        const words = titleHTML.split(/(\s+)/); // Split on spaces, keep them for joining

        const firstWordIndex = words.findIndex(word => word.trim() !== "");
        words[firstWordIndex] = `<span class="underline-first-word">${words[firstWordIndex]}</span>`;

        title.innerHTML = words.join('');
    });
}

// Function to translate the entire page
function translatePage() {
    const selectedLanguage = document.getElementById('selectedLanguage').textContent;

    // If Dutch is selected, translate to Dutch
    if (selectedLanguage === 'NL') {
        document.querySelector('.welcome').innerHTML = 'Hallo, mijn naam is <span class="name">Thijs van den Broek</span>';
        document.querySelector('.about-short').innerHTML = 'Ik ben een <span class="typing">web ontwikkelaar</span>';
        document.querySelector('.home-text p').innerHTML = 'Ik studeer aan de Fontys Hogeschool in Eindhoven, gespecialiseerd in Informatie- en Communicatietechnologie met een focus op media.';
        document.querySelector('.btn.contact-me').innerHTML = 'Projecten'; // Translated "Projects" button

        document.querySelector('.about-title').innerHTML = 'Over <span class="span" style="color: #ec1839;">Mij</span>';
        document.querySelector('.about-content h2').textContent = 'Mediastudent';
        document.querySelector('.about-content p').innerHTML = 'Als een ICT-student in het mediaprofiel ben ik gepassioneerd over het creëren van mooie en functionele gebruikersinterfaces. Mijn doel is om frontend ontwikkelaar te worden, en ik heb een solide basis in HTML en CSS. Met oog voor design en gebruikerservaring werk ik aan verschillende projecten om up-to-date te blijven met de laatste ontwikkelingen in het veld. Ik ben enthousiast over de toekomst van frontend-ontwikkeling en wil graag mijn vaardigheden in de industrie inzetten.';
        document.querySelector('.btn.contact-me2').innerHTML = 'Skills'; // Translated "skills" button

        document.querySelector('.skill-title').innerHTML = 'Mijn <span class="span" style="color: #ec1839;">Skills</span>'; // Translated "Skills" section

        document.querySelector('.skill-title2').innerHTML = 'Recente <span class="span" style="color: #ec1839;">Projecten</span>'; // Translated "Recent Projects" section
        
        document.querySelectorAll('.projects_name')[0].innerHTML = 'E-PostPro: Email <span class="text">Assistent</span>';
        document.querySelectorAll('.projects_description')[0].innerHTML = 'E-PostPro is een intelligente e-mailassistent ontworpen om gebruikers te helpen efficiënt e-mails op te stellen en eenvoudig te verbeteren met innovatieve slimme suggesties. Gebruikers kunnen de mail direct gebruiken.';
        
        document.querySelectorAll('.projects_name')[1].innerHTML = 'gezichts-ID en <span class="text">Deepfakes</span> in VR';
        document.querySelectorAll('.projects_description')[1].innerHTML = 'Dit project maakt gebruik van gezichtsherkenning in een virtuele realiteit om deepfakes te visualiseren, wat de gevaren en ethische implicaties van identiteitsmanipulatie demonstreert.';
        
        document.querySelectorAll('.projects_name')[2].innerHTML = 'Awwwards <span class="text">Recreatie</span>';
        document.querySelectorAll('.projects_description')[2].innerHTML = 'Dit project is een complete en gedetailleerde recreatie van een Awwwards website met puur HTML en CSS, waarbij moderne ontwerptechnieken en innovatieve responsive layouts worden getoond.';
        
        document.querySelectorAll('.projects_name')[3].innerHTML = 'Sport <span class="text">Coach</span>';
        document.querySelectorAll('.projects_description')[3].innerHTML = 'Dit project is een innovatieve en dynamische chatbot die gepersonaliseerd trainingsadvies biedt op basis van gebruikersinvoer. Praat of chat met de AI';
        
        document.querySelectorAll('.projects_name')[4].innerHTML = 'Esports <span class="text">Website</span>';
        document.querySelectorAll('.projects_description')[4].innerHTML = 'Dit project omvat het creëren van een visueel aantrekkelijke esports website die verschillende populaire games en boeiende gebruikersinterfaces voor gamers omvat.';
        
        document.querySelectorAll('.projects_name')[5].innerHTML = 'SSC Website <span class="text">Recreatie</span>';
        document.querySelectorAll('.projects_description')[5].innerHTML = 'Dit project is een complete en gedetailleerde recreatie van de SSC schoolwebsite met HTML en CSS, waarmee ik mijn ontwerpvaardigheden en responsive functies demonstreer.';
        
        document.querySelectorAll('.projects_button span').forEach(button => button.textContent = 'Bezoek Project');

        // Typed.js dynamic text translations
        const typedOptionsDutch = {
            strings: ['Frontend Ontwikkelaar', 'ICT student', 'Web Ontwerper'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        };
        new Typed('.typing', typedOptionsDutch);

        isDutch = true; // Set the language state to Dutch
    } else {
        // Revert back to English content
        document.querySelector('.welcome').innerHTML = 'Hello, my name is <span class="name">Thijs van den Broek</span>';
        document.querySelector('.about-short').innerHTML = 'I am a <span class="typing">web developer</span>';
        document.querySelector('.home-text p').innerHTML = 'I\'m a student at Fontys University in Eindhoven, specializing in Information and Communication Technology with a focus on media.';
        document.querySelector('.btn.contact-me').innerHTML = 'Projects'; // Revert "Projects" button

        document.querySelector('.about-title').innerHTML = 'About <span class="span" style="color: #ec1839;">Me</span>';
        document.querySelector('.about-content h2').textContent = 'Media student';
        document.querySelector('.about-content p').innerHTML = 'As an ICT student in the media profile, I am passionate about creating beautiful and functional user interfaces. My goal is to become a frontend developer, and I have a solid foundation in HTML and CSS. With an eye for design and user experience, I work on several projects to stay up-to-date with the latest developments in the field. I am excited about the future of frontend development and eager to contribute my skills to the industry.';
        document.querySelector('.btn.contact-me2').innerHTML = 'Skills'; // Revert "Skills" button

        document.querySelector('.skill-title').innerHTML = 'My <span class="span" style="color: #ec1839;">Skills</span>'; // Revert "Skills" section

        document.querySelector('.skill-title2').innerHTML = 'Recent <span class="span" style="color: #ec1839;">Projects</span>'; // Revert "Recent Projects" section
        
        document.querySelectorAll('.projects_name')[0].innerHTML = 'E-PostPro: Email <span class="text">Assistant</span>';
        document.querySelectorAll('.projects_description')[0].innerHTML = 'E-PostPro is an intelligent email assistant designed to help users efficiently compose and easily enhance their email messages with innovative smart suggestions.';
        
        document.querySelectorAll('.projects_name')[1].innerHTML = 'Exploring Deepfakes <span class="text">in VR</span>';
        document.querySelectorAll('.projects_description')[1].innerHTML = 'This project uses facial scanning in a virtual reality setting to visualize deepfakes, demonstrating the dangers and ethical implications of identity manipulation.';
        
        document.querySelectorAll('.projects_name')[2].innerHTML = 'Awwwards <span class="text">Recreation</span>';
        document.querySelectorAll('.projects_description')[2].innerHTML = 'This project is a complete and detailed recreation of an Awwwards website using pure HTML and CSS, showcasing modern design techniques and innovative responsive layouts.';
        
        document.querySelectorAll('.projects_name')[3].innerHTML = 'Workout <span class="text">Chatbot</span>';
        document.querySelectorAll('.projects_description')[3].innerHTML = 'This project is an innovative and dynamic chatbot designed to provide personalized workout advice based on user input. Talk or chat with the AI';
        
        document.querySelectorAll('.projects_name')[4].innerHTML = 'Esports <span class="text">Website</span>';
        document.querySelectorAll('.projects_description')[4].innerHTML = 'This project involves creating a visually appealing design for an esports website that includes a handful of popular games and engaging user interfaces for gamers.';
        
        document.querySelectorAll('.projects_name')[5].innerHTML = 'SSC Website <span class="text">Recreation</span>';
        document.querySelectorAll('.projects_description')[5].innerHTML = 'This project is a complete and detailed recreation of the SSC school website using HTML and CSS, effectively highlighting my design skills and responsive features.';
        
        document.querySelectorAll('.projects_button span').forEach(button => button.textContent = 'Visit Project');

        // Typed.js dynamic text for English
        const typedOptionsEnglish = {
            strings: ['Frontend Developer', 'ICT student', 'Web Designer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        };
        new Typed('.typing', typedOptionsEnglish);

        isDutch = false; // Set the language state to English
    }

    // Reapply the underline for the first word after translation
    underlineFirstWord();
}
