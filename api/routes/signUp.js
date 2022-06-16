const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user')

const router = express.Router()

router.post('/', (req, res) =>{
    // res.status(200).json({
    //     msg: "signup post req"
    // })

    const user = new User({
        _id: new mongoose.Types.ObjectId,
        email:req.body.email,
        name:req.body.name,
        phone: req.body.phone,
        gender: req.body.gender,
        password:req.body.password,
        booking:"No"
    })

    user.save()
    .then(result=>{
        console.log("SignUp result : " + result);

        res.status(200).json({
            SignUpResult : result
        })
    })
    .catch(err =>{
        console.log("SignUp result : " + err);

        res.status(500).json({
            SignUpErrro : err
        })
    })
})


module.exports = router
