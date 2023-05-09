var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Lets Hatch A Cab.');
});
app.listen(3001, function () {
  console.log('Hatch A Cab is listening on port 3001!');
});