var Country = require('../models/country');
// List of all country
exports.country_list = function(req, res) {
 res.send('NOT IMPLEMENTED: country list');
};
// for a specific country.
exports.country_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: country detail: ' + req.params.id);
};
// Handle country create on POST.
exports.country_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle country delete form on DELETE.
exports.country_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: country delete DELETE ' + req.params.id);
};
// Handle country update form on PUT.
exports.country_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: country update PUT' + req.params.id);
};