const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({
    id:  Number,
    walletId: Number,
    debitId: Number,
    debitCurrency: String,
    debitAmount: Number,
    creditId: Number,
    creditCurrency: String,
    creditAmount: Number,
    creditDescription: String
  },
    {
      timestamps: true
    }
  );

module.exports = mongoose.model('Transaction', TransactionSchema)