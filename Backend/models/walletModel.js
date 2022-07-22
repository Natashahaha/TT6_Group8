const mongoose = require('mongoose')

const WalletSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
    
},
    {
        timestamps: true
    }

)

module.exports = mongoose.model('Wallet',WalletSchema)