// Routers to handle user register and login
const express = require('express')
const router = express.Router()
const User = require('../models/userModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const keys = process.env


// Register
router.post('/register', (req,res) => {

    // Generate new password
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name
    })

    bcrypt.genSalt(10, (err, salt) => {
        if(err) return res.send(err.message)
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) return res.send(err.message)
            newUser.password = hash
            newUser.save().then(user => {
                res.status(200).json(user)
            }).catch(err => {
                console.log(err)
            })
        })
    })
})

router.post('/login', (req,res) => {
    User.findOne({username: req.body.username}).then(user => {
        if(!user) return res.status(404).json('User not found')
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if(isMatch) {
                const rule = {id:user.id, name: user.name,avatar: user.avatar, identity: user.identity}
                jwt.sign(rule, keys.secretKey, {expiresIn: '10h'}, (err,token) =>{
                    if(err) throw err
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    })
                })
            }
            else res.status(404).json('Wrong Password')
        })
    })
})

module.exports = router