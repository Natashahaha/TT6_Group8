const express = require('express')
const router = express.Router()
const Exchange = require('../models/exchangerateModel')

router.get('/all', (req,res) => {
    Exchange.find().then(exchanges => {
        res.json(exchanges);
    })
})


module.exports = router