const express = require('express')
const router = express.Router()
const Wallet = require('../models/walletModel')

router.get('/', (req,res) => {
    Wallet.find().then(wallets => {
        res.json(wallets);
    })
})

module.exports = router