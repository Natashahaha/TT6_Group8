const express = require('express')
const router = express.Router()
const Transaction = require('../models/transactionModel')

router.post('/add',(req,res) => {
    const newTrans = new Transaction(req.body)
    new Transaction(newTrans).save().then(trans => res.send('Transaction updated'))
})


module.exports = router