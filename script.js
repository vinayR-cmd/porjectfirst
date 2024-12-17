function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    document.getElementById('datetime').innerText = `${formattedDate} | ${formattedTime}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initialize the date and time on page load
updateDateTime();
