const express = require('express')
const router = express.Router()
const Currency = require('../models/currencyModel')

router.get('/all', (req,res) => {
    Currency.find().then(currencies => {
        res.json(currencies);
    })
})

router.get('/', (req,res) => {
    res.send('Good')
})


router.post('/test', (req,res) => {
    const newCur = new Currency({
        id: 1,
        wallet_id: 1
    })
    newCur.save().then(res.send('OKs'))
})

module.exports = router