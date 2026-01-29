
// Import the WebSocketServer class from the 'ws' library 
const { WebSocketServer } = require('ws'); 
 
// Create a new WebSocket server on port 8080 
const wss = new WebSocketServer({ port: 8080 }); 
 
console.log('WebSocket server started on port 8080'); 
 
// Listen for new connections 
wss.on('connection', (ws) => { 
  // This callback function runs for every new client connection 
  console.log('A new client has connected!'); 
 
  // Send a welcome message to the newly connected client 
  ws.send('Welcome to the WebSocket server!'); 
 
  // Listen for messages from this specific client 
  ws.on('message', (data) => { 
    console.log('Received message from client: %s', data); 
  }); 
 
  // Listen for this client to close the connection 
  ws.on('close', () => { 
    console.log('A client has disconnected.'); 
  }); 
});
