const express = require('express')
const req = require('express/lib/request')
const mongoose = require('mongoose')

const Buses = require('../models/buses')
const Booking = require('../models/booking')
const router = express.Router()

router.post('/new/bus', (req, res) =>{
    // res.status(200).json({
    //     msg: "buses get req"
    // })

    const bus = new Buses({
        _id: new mongoose.Types.ObjectId,
        busNo: req.body.busNo,
        to:req.body.to,
        from: req.body.from,
        seats:req.body.seats
    })

    bus.save()
    .then(result =>{
        console.log("new bus added " + result);

        for(let i = 0; i < req.body.seats ; i++){
            const booking = new Booking({
                _id: new mongoose.Types.ObjectId,
                busNo:req.body.busNo,
                seat:i+1,
                seatStatus: "available",
                userID:""
            })
    
            booking.save()
            .then(result =>{
                console.log("new booking added ");    
            })
            .catch(err =>{
                console.log("error In booking Addition " + err);  
            })
    
        }


        res.status(200).json({
            newBusAdded: result
        })
    })
    .catch(err =>{
        console.log("error In Bus Addition " + err);
        res.status(200).json({
            errorInBusAddition: err
        })
    })

    
    

})

router.get("/", (req, res)=>{
    Buses.find()
    .then(result =>{
        res.status(200).json({
            BusesInService: result
        })
    })
    .catch(err =>{
        res.status(500).json({
            ErrorInBuses: result
        })
    })

})

router.get("/:busNo", (req, res)=>{
    console.log(req.params.busNo);
    Buses.find({busNo:req.params.busNo})
    .then(result =>{
        res.status(200).json({
            BusesInService: result
        })
    })
    .catch(err =>{
        res.status(500).json({
            ErrorInBuses: result
        })
    })

})

module.exports = router
