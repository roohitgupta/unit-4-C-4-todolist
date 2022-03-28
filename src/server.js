const connect = require("./configs/db")
const app = require("./index")

app.listen(6000, async()=>{
    try{
        await connect();
        console.log("listening on port 6000")
    }catch(err){
        console.log(err.message)
    }
});