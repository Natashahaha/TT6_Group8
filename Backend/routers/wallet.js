const express = require('express')
const router = express.Router()
const Wallet = require('../models/walletModel')

// router.get('/', (req,res) => {
//     Wallet.find().then(wallets => {
//         res.json(wallets);
//     })
// })


router.get('/', (req,res) => {
    // Wallet.find().then(wallets => {
    //     res.json(wallets);
    // })
    Wallet.find({ user_id: 1 }).then(wallets => {
        res.json(wallets);
    })
    
    
})




// const query = Wallet.findOne({ 'user_id': '1' });
// console.log(query)

// query.exec(function (err, person) {
//     if (err) return handleError(err);
//     console.log(person.user_id)
//   });

module.exports = router