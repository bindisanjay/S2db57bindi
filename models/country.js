const mongoose = require("mongoose")
const countrySchema = mongoose.Schema({
    country_name: { 
        type : String ,
        minLength: 3,
        maxLength: 20
    },
    country_continent: { 
        type: String, 
    },
    country_populationranking: { 
        type: Number, 
        minLength: 3,
        maxLength: 20
    }
})
module.exports = mongoose.model("country",countrySchema)