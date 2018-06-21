var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// setup server
const app = express();
const server = http.createServer(app);
app.use(express.static(path.join(__dirname ,'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// render an API index page
app.post('/user/signup', function(req, res){
	var user = {
		username: req.body.username,
		password: req.body.password,
		updateTime: req.body.updateTime
	}
	// should be modified to store new user in DB
	res.send(user);
});
app.post('/user/login', function(req, res){
	var user = {
		username: req.body.username,
		password: req.body.password,
		updateTime: req.body.updateTime
	}
	// should be modified to check users in DB
	res.send(user);
});
app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, '/public/index.html'), function(err){
		if(err){res.status(500).send(err);}
	});
});

server.listen(3000);
console.log(`Started on port 3000`);
