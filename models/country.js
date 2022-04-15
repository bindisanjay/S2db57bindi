const mongoose = require("mongoose")
const countrySchema = mongoose.Schema({
    country_name: String,
    country_continent: String,
    country_populationranking: Number
})
module.exports = mongoose.model("country",countrySchema)