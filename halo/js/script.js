function navigate(page) {
    console.log("Navigating to:", page);


    const messageContainer = document.createElement('div');
    messageContainer.style.position = 'fixed';
    messageContainer.style.top = '50%';
    messageContainer.style.left = '50%';
    messageContainer.style.transform = 'translate(-50%, -50%)';
    messageContainer.style.color = 'white';
    messageContainer.style.padding = '20px';
    messageContainer.style.border = '2px solid #00ccff';
    messageContainer.style.background = 'rgba(0, 0, 0, 0.8)';
    messageContainer.style.boxShadow = '0 0 20px #00ccff';
    messageContainer.style.fontSize = '24px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.borderRadius = '10px';
    messageContainer.style.zIndex = '9999';

    let message = "";

    switch(page) {
        case 'campaign':
            message = "Traveling to Campaign...";
            break;
        case 'multiplayer':
            message = "Traveling to Multiplayer...";
            break;
        case 'profiles':
            message = "Opening History...";
            break;
        case 'settings':
            message = "Accessing Video...";
            break;
        case 'credits':
            message = "Showing Extra Info...";
            break;
        case 'quit':
            message = "Exiting...";
            break;
        default:
            message = "Unknown Option!";
    }

    messageContainer.textContent = message;
    document.body.appendChild(messageContainer);


    document.body.classList.add('fade-out');


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
                window.location.href = 'video.html';
                break;
            case 'credits':
                window.location.href = 'extrainfo.html';
                break;
            case 'quit':
                window.location.href = 'index.html';
                break;
            default:
                console.log("Unknown Option!");
            }
        }, 2000);
    
    }
    