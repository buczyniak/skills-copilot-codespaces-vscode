// Create web server application
// Usage: node comments.js
// Note: To run the server, you need to install the express module
//       npm install express

var express = require('express');
var app = express();

// Create a route for the app
// GET: http://localhost:8081/comments
app.get('/comments', function (req, res) {
   res.send('Hello World');
})

// Create a route for the app
// GET: http://localhost:8081/
app.get('/', function (req, res) {
   res.send('Hello World');
})

// Create a route for the app
// GET: http://localhost:8081/hi
app.get('/hi', function (req, res) {
   res.send('Hi World');
})

// Create a route for the app
// GET: http://localhost:8081/hello
app.get('/hello', function (req, res) {
   res.send('Hello World');
})

// Create a route for the app
// GET: http://localhost:8081/bye
app.get('/bye', function (req, res) {
   res.send('Bye World');
})

// Create a route for the app
// GET: http://localhost:8081/goodbye
app.get('/goodbye', function (req, res) {
   res.send('Goodbye World');
})

// Create a route for the app
// GET: http://localhost:8081/adios
app.get('/adios', function (req, res) {
   res.send('Adios World');
})

// Create a route for the app
// GET: http://localhost:8081/exit
app.get('/exit', function (req, res) {
   res.send('Exit World');
})

// Create a route for the app
// GET: http://localhost:8081/quit
app.get('/quit', function (req, res) {
   res.send('Quit World');
})

// Create a route for the app
// GET: http://localhost:8081/stop
app.get('/stop', function (req, res) {
   res.send('Stop World');
})

// Create a route for the app
// GET: http://localhost:8081/terminate
app.get('/terminate', function (req, res) {
   res.send('Terminate World');
})

// Create a route for the app
// GET: http://localhost:808