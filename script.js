function updateCurrentTime() {
    const currentTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const now = new Date();
    currentTimeElement.textContent = `UTC Time: ${now.toUTCString()}`;
}

// Update the current time every second
setInterval(updateCurrentTime, 1000);

// Initial update
updateCurrentTime();