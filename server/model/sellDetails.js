const mongoose = require('mongoose')

const sellSchema = new mongoose.Schema({
    name:{
            type: String,
            required: true,
    },
    city:{
        type: String,
            required: true,
    },
    locality:{
        type: String,
            required: true,
    },
    state:{
        type: String,
            required: true,
    },

})
const Sell = mongoose.model('SELL',sellSchema)

module.exports = Sell