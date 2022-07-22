const mongoose = require("mongoose")

const CurrencySchema = new mongoose.Schema({
    id:  Number,
    walletId: Number,
    currency:{
      type: String,
      required: true,
    },
    amount: Number,
  });

module.exports = mongoose.model('Currency', CurrencySchema)