const mongoose = require("mongoose")

const ExchangeRateSchema = new mongoose.Schema({
    id:  Number,
    base_currency: String,
    exchange_currency: String,
    rate: Number,
  }
);

module.exports = mongoose.model('ExchangeRate', ExchangeRateSchema)