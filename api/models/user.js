const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email:String,
    name:String,
    phone: Number,
    gender: String,
    password:String,
    booking:String

})

module.exports = mongoose.model('user', userSchema)