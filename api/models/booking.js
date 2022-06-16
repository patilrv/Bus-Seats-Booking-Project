const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    busNo:String,
    seat:Number,
    seatStatus: String,
    userID:String

})

module.exports = mongoose.model('booking', bookingSchema)