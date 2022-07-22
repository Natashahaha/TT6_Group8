// For users CRUD operations
const express = require('express')
const router = express.Router()
const User = require('../models/User')

const passport = require('passport')
const bcrypt = require('bcrypt')
const keys = process.env

router.get('/', (req,res) => {
    res.send("Hey it's userRoutes")
})

// Update user
router.put('/:id', (req,res) => {
    
    User.findOneAndUpdate(
        {_id: req.params.id},
        {$set: req.body },
        {new: true}
    ).then(user => res.status(200).json(user))
})


// Get current user information
router.get('/current', passport.authenticate('jwt',{session:false}), (req,res) => {
    User.findOne({_id: req.user.id}).then(user => {
        // Hide the password from displaying
        const {password, updatedAt, ...other} = user._doc
        res.status(200).send(other)
    })
})


// Reset password
router.post('/reset', passport.authenticate('jwt',{session:false}), (req,res) => {
    oldPwd = req.body.oldPwd
    newPwd = req.body.newPwd
    if(oldPwd === newPwd) return res.status(404).json('New password cannot be the same as old password')
    // 1. Check old password is correct
    bcrypt.compare(oldPwd, req.user.password).then(isMatch => {
        if(isMatch) {
            bcrypt.genSalt(10, (err, salt) => {
                if(err) return res.send(err.message)
                bcrypt.hash(newPwd, salt, (err, hash) => {
                    if(err) return res.send(err.message)
                    User.findOneAndUpdate(
                        {_id: req.user._id},
                        {password: hash},
                        {new: true}
                    ).then(user => res.json(user))
                })
            })
        }
        else res.status(404).json('Wrong Password')
    })
})


module.exports = router