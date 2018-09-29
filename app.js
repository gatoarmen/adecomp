// Dependencies
var http = require("http");
  const express = require('express')
const app = express();
const path = require('path')

 


// Set our port to 8080
var PORT = 8080;


app.use(express.static(path.join(__dirname, 'public')));

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});