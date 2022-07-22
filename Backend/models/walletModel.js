const mongoose = require('mongoose')

const WalletSchema = new mongoose.Schema({
    user_id: {
        type: String,
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