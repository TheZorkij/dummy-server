const express = require("express");
var path = require('path');
const app = express();

app.get('/json', function(req, res) {

  res.header('Content-type','application/json');
  res.header('Charset','utf8');
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(__dirname + '/public/full.json');
});

app.set('port', 1234);
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), () => {
  var port = server.address().port;
  console.log("Server is listening on port: 1234");
});
