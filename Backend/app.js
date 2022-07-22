const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routers/users.js')
const authRoute = require('./routers/auth.js')
const postRoute = require('./routers/posts')
const passport = require('passport')
const cors = require('cors')

