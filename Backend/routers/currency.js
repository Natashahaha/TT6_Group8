const express = require('express')
const router = express.Router()
const Currency = require('../models/currencyModel')

router.get('/all', (req,res) => {
    Currency.find().then(users => {
        res.json(users);
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