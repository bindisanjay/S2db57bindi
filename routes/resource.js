var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var country_controller = require('../controllers/country');



/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// country ROUTES ///
// POST request for creating a country.
router.post('/countries', country_controller.country_create_post);
// DELETE request to delete country.
router.delete('/countries/:id', country_controller.country_delete);
// PUT request to update country.
router.put('/countries/:id',
country_controller.country_update_put);
// GET request for one country.
router.get('/resource/countries/:id', country_controller.country_detail);
// GET request for list of all country items.
router.get('/countries', country_controller.country_list);
module.exports = router;