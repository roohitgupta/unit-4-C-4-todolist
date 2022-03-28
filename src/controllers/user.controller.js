const express = require("express")
const {body, validationResult} = require("express-validator")
const user = require("../modules/user.module")
const router = express.Router();

router.get("", async(req, res)=>{
    try{
        const users = await user.find().lean().exec()
        return res.status(200).send(users)
    }catch(err){
        console.log(err.message)
    }
});

// register end point post request

router.post("/register", async(req, res)=>{
    try{
        const user = await user.create(req.body)
        return res.status(201).send(users)
    }catch(err){
        return res.status(501).send(err.message)
    }
});

// login post endpoint 

router.post("/login", async(req, res)=>{
    try{
        const user = await user.create(req.body)
        return res.status(201).send(users)
    }catch(err){
        return res.status(501).send(err.message)
    }
});






module.exports = router;