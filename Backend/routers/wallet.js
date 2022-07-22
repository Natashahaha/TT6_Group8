const express = require('express')
const router = express.Router()
const Wallet = require('../models/walletModel')

router.get('/all', (req,res) => {
    Wallet.find().then(wallets => {
        res.json(wallets)
    })
})


router.get('/test/:id', (req,res) => {
    Wallet.find({_id: id}).then(wallets => {
        res.json(wallets)
    })
})

module.exports = router