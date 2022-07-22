const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
// const userRoute = require('./routers/users.js')
const authRoute = require('./routers/auth.js')
// const postRoute = require('./routers/posts')
const curRoute = require('./routers/currency')
const exchangeRoute = require('./routers/exchange')
const transactionRoute = require('./routers/transaction')
const walletRoute = require('./routers/wallet')
// const passport = require('passport')
const cors = require('cors')

// To allow the across domain visit from frontend
dotenv.config()

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, 
    ()=>{
    console.log('Connect to MongoDB')
})

// Middleware
app.use(express.json())

// app.use(passport.initialize())
// require('./config/passport')(passport)

// app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/cur', curRoute)
app.use('/api/exchange',exchangeRoute)
app.use('/api/wallet',walletRoute)
app.use('/api/transaction', transactionRoute)

// app.use('/api/posts',postRoute)


app.listen(5000, () => {
    console.log('Backend server is running at http://127.0.0.1:5000')
})