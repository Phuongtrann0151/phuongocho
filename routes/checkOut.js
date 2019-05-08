var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('checkOut');
});


router.post('/', (req, res) => {
	insertRecord(req, res);
});

function insertRecord(req, res) {
	console.log(req.body);
	// var data = new data();
	// dataList.email = req.body.email;
	// dataList.password = req.body.password; 	
	// dataList.save((err, doc) => {
	// 	if (!err) {
	// 		res.redirect('dataLis')
	// 	}
	// })
}

module.exports = router;

