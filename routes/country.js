var express = require('express');
const country_controlers= require('../controllers/country');
var router = express.Router();

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', country_controlers.country_view_all_Page );
/// COSTUME ROUTES ///
router.get('/detail', country_controlers.country_view_one_Page); 

router.get('/create',secured, country_controlers.country_create_Page); 

router.get('/update',secured, country_controlers.country_update_Page); 

router.get('/delete',secured, country_controlers.country_delete_Page);

module.exports = router;