const express = require("express")
const app = express()
app.use(express.json())


const userController = require("./controllers/user.controller")
const todoController = require("./controllers/ToDo.controller")

app.use("/user", userController);
app.use("/todo", todoController);



module.exports = app;