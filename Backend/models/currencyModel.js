const mongoose = require("mongoose")

const CurrencySchema = new Schema({
    id:  Number,
    walletId: Number,
    currency:{
      type: String,
      required: true,
    },
    amount: Number,
  });

module.exports = mongoose.model('Currency', CurrencySchema)