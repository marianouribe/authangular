const express = require('express')
const router = express.Router()

const User = require('../models/user')
const mongoose = require('mongoose')

const db = "mongodb://mariano:mu1234@ds221242.mlab.com:21242/marianoapidb"

mongoose.connect(db, err => {
    if (err){
        console.error('Error' + err)
    }else {
        console.log('Conected with mongodb')
    }
})

router.get('/', (req, res) => {
    res.send('From API router')
})

router.post('/register', (req, res) => {
    
    let userData = req.body

    User.findOne({email: userData.email}, (err, user)=>{
        if (err){
            console.log(err)
        }else{
            if (!user){
                let userreg = new User(userData)
                userreg.save((error) =>{
                    if (error){
                        console.log(error)
                    }else{
                        res.send(200)
                    }
                })
            }else{
                res.status(401).send('Email existe!!')
                }
            }
        }
    )

    
})

router.post('/login', (req, res)=>{
    let userData = req.body
    
    User.findOne({email: userData.email}, (error, user)=>{
        if (error){
            console.log(error)
        }else{
            if (!user){
                res.status(401).send('Invalid email')
            }else
            if (user.password !== userData.password){
                res.status(401).send('Invalid password')
            }else{
                res.status(200).send(user)
            }
        }
    })
})

module.exports = router