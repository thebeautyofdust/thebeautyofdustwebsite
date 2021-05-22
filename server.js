var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

app.get("/shesaid", (req, res) => {
  res.status(301).redirect("#/piece/shesaid")
})

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});