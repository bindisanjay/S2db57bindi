var express = require('express');
const countries_controlers= require('../controllers/country');
var router = express.Router();

/* GET home page. */
router.get('/', countries_controlers.country_view_all_Page);

module.exports = router;