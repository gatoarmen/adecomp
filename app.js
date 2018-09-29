// Dependencies
var http = require("http");
  const express = require('express')
const app = express();
const path = require('path')

 


// Set our port to 8080
var PORT = 8080;


app.use(express.static(path.join(__dirname, 'public')));


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});