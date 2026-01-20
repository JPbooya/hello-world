// Import express mods
import express from 'express';

// Define a port number where the server will listen
const PORT = 3000;

// Create an express application
const app = express();

// Define the root path 
app.get('/', (req, res) => {
  // Send a message to the client
  res.send('Hello, World!');
});

// Start the server 
app.listen(PORT, () =>  {
  console.log(`Server is running at
    http://localhost:${PORT}`);
});