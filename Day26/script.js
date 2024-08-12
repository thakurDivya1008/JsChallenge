let username = '';

function joinChat() {
    const usernameInput = document.getElementById('username-input');
    username = usernameInput.value.trim();
    if (username) {
        document.getElementById('username-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
    }
}


const socket = new WebSocket('ws://localhost:8080');


socket.onopen = () => console.log('Connected to the WebSocket server');
socket.onclose = () => console.log('Disconnected from the WebSocket server');


socket.onmessage = (event) => {
    console.log('Message from server:', event.data);
     displayMessage(event.data, 'received');
};

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    let message = messageInput.value.trim();
    if (message && username) {
        const fullMessage = `${username}: ${message}`;

       
        socket.send(fullMessage.toString());

      
        //   displayMessage(fullMessage, 'sent');
        messageInput.value = '';
    }
}

socket.addEventListener('message', function(event) {
    
    const receivedMessage = event.data.toString();

   
    console.log('Received:', receivedMessage);

    
    //  displayMessage(receivedMessage, 'received');
});



function displayMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = message;
    document.getElementById('messages').appendChild(messageElement);
}

document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
 document.getElementById('send-button').addEventListener('click', sendMessage);

 document.getElementById('message-input').addEventListener('keypress', function(event) {
   if (event.key === 'Enter') {
        sendMessage();    }
});
