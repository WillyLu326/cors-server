const express = require('express'),
	  router = express.Router();

module.exports = router;

var data = [
	{username: 'Willy', password: '123'},
	{username: 'Zheng', password: '321'}
];

router.get('/data', function(req, res) {
	res.json(data);
});
router.post('/data', function(req, res) {
	const body = req.body;
	data.push(body);
	res.send('Done');
});
router.put('/data/:name', function(req, res) {
	const body = req.body;
	const name = req.params.name;

	data.map(obj => {
		if (obj.username == name) {
			obj.password = body.password;
			return res.send('Done');
		}
 	});
 	return res.send('No this value');
});
router.delete('/data/:name', function(req, res) {
	const name = req.params.name;
	data = data.filter(obj => obj.username != name);
	return res.send('Success delete');
});