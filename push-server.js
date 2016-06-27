var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var tmp_client = [];
app.use(bodyParser.json()); 

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
	res.sendFile(__dirname+'/public/index.html');
})

app.post('/store-subscription', function(req, res) {

	
	
	var options = {
		url: 'https://android.googleapis.com/gcm/send',
		headers: {
			'Authorization': 'key=AIzaSyCihMAipxCVSajsyo7IarC7qIxIkOEBIsk',
		},
		json: {to:  req.body.client.split('send/')[1]}
	};


	request.post(options);

	
	
})
app.listen(8081);