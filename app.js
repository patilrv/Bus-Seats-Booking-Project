const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const busestRoutes = require('./api/routes/buses')
const usersRoutes = require('./api/routes/user')
const signUpRoutes = require('./api/routes/signUp')
const loginRoutes = require('./api/routes/login')
const bookingRoutes = require('./api/routes/booking')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/buses', busestRoutes)
app.use('/user', usersRoutes)
app.use('/user/signup', signUpRoutes)
app.use('/user/login', loginRoutes)
app.use('/user/booking', bookingRoutes)




app.use((req, res, next)=>{
    // res.status(200).json({
    //     message: "app is running"
    // })
    res.status(404).send( "<h2>404 Bad Request Page Not Found </h2>")
})

mongoose.connect('mongodb://localhost:27017/RedBus1', { useNewUrlParser: true }, (error) => {
    if (!error) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + error) }
});

module.exports =app