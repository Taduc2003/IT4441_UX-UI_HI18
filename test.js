document.addEventListener('DOMContentLoaded', () => {
    const themeOptions = document.querySelectorAll('.theme-option');
    const languageRadios = document.querySelectorAll('input[name="language"]');
    
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            themeOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            if (option.id === 'dark-theme') {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        });
    });

    languageRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const selectedLanguage = document.querySelector('input[name="language"]:checked').value;
            if (selectedLanguage === 'vi') {
                document.documentElement.lang = 'vi';
                // Change text to Vietnamese
            } else if (selectedLanguage === 'en') {
                document.documentElement.lang = 'en';
                // Change text to English
            } else if (selectedLanguage === 'jp') {
                document.documentElement.lang = 'jp';
                // Change text to Japanese
            }
        });
    });
});
