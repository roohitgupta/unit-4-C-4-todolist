const express = require("express")
const {body, validationResult} = require("express-validator")
const ToDo = require("../modules/ToDo.module")
const router = express.Router();

// get request for find all the todos

router.get("/todos", async(req, res)=>{
    try{
        const users = await user.find().lean().exec()
        return res.status(200).send(users)
    }catch(err){
        console.log(err.message)
    }
});

// post request for create a new todo

router.post("/todos", async(req, res)=>{
    try{
        const user = await user.create(req.body)
        return res.status(201).send(users)
    }catch(err){
        return res.status(501).send(err.message)
    }
});

// get request for cheak that todo is new or already in list

router.get("/:id", async(req,res)=>{
    try{
        const todo = await post.findByIdAndDelete(req.params.id, res.body, {new:true}).lean().exac()
        return res.status(201).send(todo)
    }catch(err){
    res.status(501).send(err.message)
    }
});

// patch request for adding or updating a todo

router.patch("/:id", async(req,res)=>{
    try{
        const todo = await post.findByIdAndDelete(req.params.id, res.body, {new:true}).lean().exac()
        return res.status(201).send(todo)
    }catch(err){
    res.status(501).send(err.message)
    }
});

// delete request for delete a todo 

router.delete("/:id", async(req,res)=>{
    try{
        const todo = await post.findByIdAndDelete(req.params.id, res.body).lean().exac()
        return res.status(201).send(todo)
    }catch(err){
    res.status(501).send(err.message)
    }
});


module.exports = router;


