const express = require('express')
const req = require('express/lib/request')
const mongoose = require('mongoose')

// const Buses = require('../models/buses')
// const Users = require('../models/user')
const Booking = require('../models/booking')

const router = express.Router()


router.post("/", (req, res) =>{

    const bookSeat = (busNumber, seatNumber) => {
        console.log(busNumber, seatNumber);
        Booking.updateOne({busNo:busNumber, seat:seatNumber}, 
            {$set : {
                busNo:req.body.busNo,
                seat:req.body.seat,
                seatStatus: "booked",
                userID:req.body.email
            }}, function(err, data) {
                if (err) return console.error(err);
                console.log(data);
              }
        )
    }

    let seats = req.body.seat
    let busNumber = req.body.busNo
    for (let i = 0; i < seats.length; i++ ){
        console.log(seats[i]);
        // Booking.find({busNo:req.body.busNo, seat:seats[i]})
        // .then(result => {
        //     console.log(result);
        // })
        bookSeat(busNumber,seats[i])
        // .then(result =>{
        //     console.log("seat booked");
        // })
        // .catch(err =>{
        //     res.status(500).json({
        //         errorInBooking:err,
        //         seatNo:seats[i]
        //     })
        //     console.log("error while booking");
        // })

        if(i == seats.length-1){
            res.status(200).json({
                msg: "seats booked !!!"
            })
        }
    }

    

})


module.exports = router