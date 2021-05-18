'use strict';
require("dotenv").config();
var express = require('express');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
const cors = require("cors");
var http = require('http');
var path = require('path');
var routes = require('./routes');
var activity = require('./routes/activity');
var rts = require('./routes/rts');
const LogController = require('./controllers/Logs');

var app = express(); 

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use(bodyParser.raw({ type: 'application/jwt' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(errorhandler());
}
 
app.get('/', routes.index);
app.post('/login', routes.login);
app.post('/logout', routes.logout);

app.post('/journeybuilder/save', activity.save);
app.post('/journeybuilder/validate', activity.validate);
app.post('/journeybuilder/publish', activity.publish);
app.post('/journeybuilder/execute', activity.execute);


app.get("/log", LogController.all);
app.post("/log", LogController.create);

app.post("/rts/login", rts.login);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});