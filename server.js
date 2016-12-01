const express = require('express'),
	  cors = require('cors'),
      bodyParser = require('body-parser'),
	  app = express(),
	  router = require('./router');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

app.get('/', function(req, res) {
	res.send('ddd');
});

app.listen(3001, function() {
	console.log('cros server is started');
});