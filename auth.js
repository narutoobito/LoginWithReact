const express= require("express")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const model = require('./models/LoginDetailsModel')

authenticate=(req,res,next)=>{
    console.log("got request ", req.body)
    username = req.body.username
    password = req.body.password
    model.findOne({username})
    .then(user=>{
        if(user){
            bcrypt.compare(password, user.password)
            .then(result=>{
                if(result){
                    {
                    console.log("Loggedin")
                    res.json({message: "Loggedin as " + username, ok: true})
                    }
                }
                else{
                    res.json({message: "wrong username or password" , ok: false}).status(405)
                    }
                })
            .catch(err => console.log(err))
            }
        else{
             res.json({message: "NO User with this inputs", ok: false}).then(404)
            }
        })

    .catch(err=> console.log("err " + err )
    )
}

module.exports = authenticate