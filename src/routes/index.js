var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/stores', function(req, res, next) {
  res.render('stores')
});

module.exports = router;
