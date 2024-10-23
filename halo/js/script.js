function navigate(page) {
    console.log("Navigating to:", page);

    // Fade-out de hoofdinhoud
    document.body.classList.add('fade-out');

    // Navigeer naar de volgende pagina na 1 seconde (de tijd die de fade-out duurt)
    setTimeout(() => {
        switch(page) {
            case 'campaign':
                window.location.href = 'campaign.html'; 
                break;
            case 'multiplayer':
                window.location.href = 'multiplayer.html';
                break;
            case 'profiles':
                window.location.href = 'geschiedenis.html';
                break;
            case 'settings':
                window.location.href = 'extrainfo.html';
                break;
            case 'credits':
                window.location.href = 'extrainfo.html';
                break;
            case 'quit':
                window.location.href = '../index.html';
                break;
            default:
                console.log("Unknown Option!");
        }
    }, 1000); // Wacht 1 seconde voordat je naar de volgende pagina gaat
}
