const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({
    id:  Number,
    wallet_id: Number,
    debit_id: Number,
    debit_currency: String,
    debit_amount: Number,
    credit_id: Number,
    credit_currency: String,
    credit_amount: Number,
    credit_description: String
  },
    {
      timestamps: true
    }
  );

module.exports = mongoose.model('Transaction', TransactionSchema)