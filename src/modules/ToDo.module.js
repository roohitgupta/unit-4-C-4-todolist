const mongoose = require("mongoose")

const ToDoSchema = new mongoose.Schema({
    title: {type:String, required: true},

    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("ToDo", ToDoSchema);