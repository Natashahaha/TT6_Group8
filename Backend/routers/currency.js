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
    const deductedAmount = req.body.amount
    Currency.findOne({id: req.body.id}).then(currency => {
        const curAmount = currency.amount
        Currency.findOneAndUpdate({id: req.body.id}, {amount: curAmount - deductedAmount} ).then(currency => {
            
        })
        res.json(currency)
    })
    
})

module.exports = router