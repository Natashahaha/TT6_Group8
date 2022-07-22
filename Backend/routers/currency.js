const express = require('express')
const router = express.Router()
const Currency = require('../models/currencyModel')
const Wallet = require('../models/walletModel')

router.get('/all', (req,res) => {
    Currency.find().then(currencies => {
        res.json(currencies);
    })
})

router.post('/deduct', (req,res) => {
    const deductedAmount = req.amount
    const cur_id = req.cur_id

    Currency.findOneAndUpdate({id: cur_id}, {amount: amount - deductedAmount} ).then(currency => {
        res.json(currency)
    })
})

module.exports = router