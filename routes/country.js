var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('country', { title: 'Search Results by country' });
});

module.exports = router;