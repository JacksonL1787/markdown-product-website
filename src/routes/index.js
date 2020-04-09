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

router.get('/request-store', function(req, res, next) {
  res.render('request-store')
});

router.get('/request-success', function(req, res, next) {
  res.render('request-success')
});

module.exports = router;
