const express = require('express')
const mongoose = require('mongoose')

const Users = require('../models/user')
const Buses = require('../models/buses')
const Booking = require('../models/booking')
const router = express.Router()

router.post('/profile', (req, res) =>{

    Users.find({email: req.body.email})
    .then(result => {
        res.status(200).json({
            Profile: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
})

router.post('/myBookings', (req, res) => {

    Booking.find({userID: req.body.email})
    .then(result => {
        
        res.status(200).json({
            mybookings: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })

})


module.exports = router
