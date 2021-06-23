var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var account = require('./routes/account');
// var activity = require('./routes/activity');

var app = express(); 

app.set('port', process.env.PORT || 3000);
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

app.get('/account', account.getAll);

// app.post('/journeybuilder/save', activity.save);
// app.post('/journeybuilder/validate', activity.validate);
// app.post('/journeybuilder/publish', activity.publish);
// app.post('/journeybuilder/execute', activity.execute);


http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});