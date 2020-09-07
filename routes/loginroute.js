const express = require("express")
const router = require("express").Router()
const bcrypt = require("bcrypt")
const app = express()
const data = require("../models/LoginDetailsModel")

read = (req,res) => {
    data.find().then(user=> res.json(user))
    .catch(err=> res.status(400).json('Error'+err));
}

add = (req,res)=>{
    const username=req.body.username
    const password = req.body.password


    bcrypt.hash(password , 10)
    .then( hash=> {
        newuser = new data( { username, password, hash } )
         newuser.save().then(()=> {
            console.log("user added")
            res.json({message: "added the "+ username})
            })
         .catch(err=> res.status(400).json('error'+err+" yes"));
    })
}


update = (req,res,next)=>{
    const _id = req.params.id
    data.findByIdAndUpdate({_id},
    {
    $set: req.body
    })
    .then(()=>{
    console.log("updated");
    res.json({message: "updated"})
    }
    ).catch(err=>console.log("error")+err)
    next()

}

remove = (req,res)=>{
    const _id = req.params.id
    data.findByIdAndDelete({_id}).then(()=>
    {
        console.log("removed")
        res.json({
        message: "removed"
        })
        }
    ).catch(err=>console.log("error"+err))
}

router.get('/read', read)
router.post('/add', add)

router.patch('/update/:id', update)
router.delete('/remove/:id', remove)

module.exports = router