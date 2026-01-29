const socket = new WebSocket('ws://localhost:8080'); 
 
// Connection opened 
socket.addEventListener('open', (event) => { 
  console.log('Connected to WebSocket server!'); 
  // Send a message to the server 
  socket.send('Hello Server, this is the client!'); 
}); 
 
// Listen for messages from the server 
socket.addEventListener('message', (event) => { 
  console.log('Message from server: ', event.data); 
}); 
 
// Listen for connection close 
socket.addEventListener('close', (event) => { 
  console.log('Disconnected from WebSocket server.'); 
}); 
 
// Listen for errors 
socket.addEventListener('error', (error) => { 
  console.error('WebSocket Error: ', error); 
}); 
