var express = require('express');
var router = express.Router();
var infoRestaurant = require('./infoRestaurant.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('menu01', {
  	infoRestaurant: infoRestaurant
  });
});

module.exports = router;
	