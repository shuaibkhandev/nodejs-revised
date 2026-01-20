const express = require("express");
const mongoose = require("mongoose")
const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/learning_db").then(()=>{
    console.log("DB Connected.");
}).catch(()=>{
    console.log("DB Connection Failed.")
})


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required : true,
        unique : true
    }
})

const usersModel= mongoose.model("user", userSchema);

app.get("/users", async (req, res)=>{
    const users =  await usersModel.find({});
    res.status(200).send({success:true, users:users})
})

app.get("/create-user", async (req, res)=>{
    const user = await usersModel.create(req.body);
    return res.status(201).send({success: true, user:user})
})


app.listen(8000, () => console.log("Server running at port no 8000"))