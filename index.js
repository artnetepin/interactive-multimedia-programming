var express = require('express');
var app = express();

var PORT = process.env.PORT || 5000;
app.set('port', PORT);

app.use(express.static('pages'))

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// Start to listen incomig requests (start the web server)
app.listen(app.get('port'), function() {
  console.log('Up and running in a port:', PORT);
});
