const mongoose = require("mongoose")

const ToDoSchema = new mongoose.Schema({
    title: {type:String, required: true},

},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("ToDo", ToDoSchema);