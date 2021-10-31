const mongoose = require('mongoose')

const tourSchema = mongoose.Schema(
    {places: 
        [{
            img: {
                type: String
            },

            placeName: {
                type: String
            },

            price: {
                type: String
            },

            description: {
                type: String
            }
        },]   

    })

const TourModel = mongoose.model('TourModel', tourSchema);

module.exports = TourModel;