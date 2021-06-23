var express = require('express');
var http = require('http');
var path = require('path');
var account = require('./routes/account');

var app = express(); 

app.set('port', process.env.PORT || 3000);
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

app.get('/accounts', account.getAll);
app.patch('/accounts/:id', account.update);
app.get('/accounts/:id', account.get);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});