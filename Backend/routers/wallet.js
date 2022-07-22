const express = require('express')
const router = express.Router()
const Wallet = require('../models/walletModel')

router.get('/all', (req,res) => {
    Wallet.find().then(wallets => {
        res.json(wallets)
    })
})


router.get('/test', (req,res) => {
    Wallet.find({user_id: 1}).then(wallets => {
        res.json(wallets)
    })
})


// {_id: '62da290051b0f3a99ac453a0'}
module.exports = router