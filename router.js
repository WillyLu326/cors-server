const express = require('express'),
	  router = express.Router();

module.exports = router;

const data = [
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