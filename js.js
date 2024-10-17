function sendMessage() {
    const inputField = document.getElementById('user-input');
    const message = inputField.value.trim();
    
    if (message !== "") {
        addMessage(message, 'user');
        inputField.value = '';
        
        setTimeout(() => {
            botReply("I'm here to help!"); // Simulated bot response
        }, 500);
    }
}

function addMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', `${sender}-message`);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat
}

function botReply(message) {
    addMessage(message, 'bot');
}
