const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/user')

const router = express.Router()

router.post('/', (req, res) =>{
    // res.status(200).json({
    //     msg: "login get req"
    // })
    let email = req.body.email
    let pass = req.body.password

    User.findOne({email: email})
    .then((result)=>{
        // console.log(result.email);
        if (pass == result.password){
            res.status(200).json({
                status: "Login Successfull!!!"
            })
        }else{
            res.status(200).json({
                status: "Login Faild.  Invalid password"
            })
        }
        
    })
    .catch(err =>{
        res.status(500).json({
            status: "Login Faild.  Plz SignUp First"
        })
        console.log(err);
    })


})


module.exports = router
