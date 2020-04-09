const express = require('express');
const router = express.Router();

const requestStore = require('../mixpanel/request-store')

/* GET home page. */

router.post('/post/request-store', function(req, res, next) {
  const storeName = req.body.storeName
  requestStore(storeName)
  setTimeout(() => {
    res.sendStatus(200)
  }, 1000)
});

module.exports = router;
