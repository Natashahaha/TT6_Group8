const mongoose = require('mongoose')

const ExchangeSchema = new mongoose.Schema({
    id:{
        type: Number,
    },
    base_currency:{
        type: String,
    },
    exchange_currency:{
        type: String,
    },
    rate:{
        type: Number
    }
}
)

module.exports = mongoose.model('exchangerate', ExchangeSchema)