var express = require('express');
var router = express.Router();



// Require controller modules.
var api_controller = require('../controllers/api');
var country_controller = require('../controllers/country');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
 
 

// POST request for creating a Costume.
router.post('/country', country_controller.country_create_post);
// DELETE request to delete Costume.
router.delete('/country/:id', country_controller.country_delete);
// PUT request to update Costume.
router.put('/country/:id', country_controller.country_update_put);
// GET request for one Costume.
router.get('/country/:id', country_controller.country_detail);
// GET request for list of all Costume items.
router.get('/country', country_controller.country_list);
module.exports = router;