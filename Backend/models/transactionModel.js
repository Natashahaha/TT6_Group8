const mongoose = require("mongoose")

const TransactionSchema = new Schema({
    id:  Number,
    walletId: Number,
    debitId: Number,
    debitCurrency: String,
    debitAmount: Number,
    creditId: Number,
    creditCurrency: String,
    creditAmount: Number,
    creditDescription: String
  });

module.exports = mongoose.model('Transaction', TransactionSchema)