// Create a very simple HTTP Web server on your local machine. 
// Set up a HTTP Web server and client, require('http').
var http = require('http');

// createServer returns a new instance of the http server.
// A function is used as a request listener.
// req is an instance of the incoming request.
// res is an instance of the server response.
// When you browse to http://localhost:1337/, a 'request' event occurs and
//   "Hello World" is written from the HTTP Web server back to your browser. 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "localhost");

console.log('Server running at http://localhost:1337/');