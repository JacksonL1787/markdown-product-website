var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/stores', function(req, res, next) {
  res.render('stores')
});

router.get('/support', function(req, res, next) {
  res.render('support')
});

module.exports = router;
