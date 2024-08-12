
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('message', (message) => {
        // Assuming message is a plain string, no need to parse as JSON
        console.log('Received:', message.toString());

        // Broadcast the message to all clients
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
