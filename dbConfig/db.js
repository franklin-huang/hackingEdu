'use strict';

var mongoose = require('mongoose');
var queModel = require('../model/questions');
var port = process.env.port || 3000;

mongoose.connect('mongodb://localhost/hackingEdu');

mongoose.connection.on('error', function (err) {
	console.log('DB Connection err: ' + err);
});

mongoose.connection.on('connected', function () {
	console.log('DB is connected successfully');
});

