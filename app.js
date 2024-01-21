// Import the 'http' module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response
  res.end('Hello from HArry!!\n');
  process.exit()
});

// Listen for incoming requests on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
