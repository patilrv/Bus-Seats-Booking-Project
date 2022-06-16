const mongoose = require('mongoose')

const busesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    busNo:String,
    to:String,
    from: String,
    seats:Number

})

module.exports = mongoose.model('Buses', busesSchema)