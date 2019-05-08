var express = require('express');
var router = express.Router();
var infoRestaurant = require('./infoRestaurant.js')
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		infoRestaurant: infoRestaurant
	});
});

module.exports = router;
