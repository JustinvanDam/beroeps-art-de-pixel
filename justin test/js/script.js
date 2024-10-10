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
            message = "Navigating to Campaign...";
            break;
        case 'multiplayer':
            message = "Navigating to Multiplayer...";
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

    setTimeout(() => {
        document.body.removeChild(messageContainer);
    }, 2000);
}
