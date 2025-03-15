// script.js
function greetUser() {
    const name = document.getElementById('nameInput').value.trim();
    const messageElement = document.getElementById('greetingMessage');

    if (name) {
        messageElement.innerHTML = `Hello, <strong>${name}</strong>! 🎉 Welcome to WelcomeHub.`;
        messageElement.style.color = "#4CAF50";
    } else {
        messageElement.innerText = "Please enter your name to continue.";
        messageElement.style.color = "#f44336";
    }
}
