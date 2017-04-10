var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var _ = require('lodash');
var fs = require('fs');
var crypto = require('crypto');
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;

var tools = require('./repository/tools.js');
var home = require('./repository/home/home.js');

var mongoConnectionString = fs.readFileSync('./config/mongoConnectionString.txt', 'utf8');

MongoClient.connect(mongoConnectionString, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly MongoDB");
  var collection = db.collection('test');
  collection.find({}).toArray(function(err, recordSet) {
    console.log("Found the following records");
    console.dir(recordSet);
  });
  db.close();
});

var app = express();
var port = 8080;
var sessions = [];

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

app.post('/api/login', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	home.login(username, password, crypto, tools, sql, _, sessions, res);
});

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function () {
	console.log("Server running on port " + port + ".");
});