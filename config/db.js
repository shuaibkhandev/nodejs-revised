const mongoose = require("mongoose")



function DB_Conn(url){
mongoose.connect(url).then(()=>{
    console.log("DB Connected.");
}).catch(()=>{
    console.log("DB Connection Failed.")
})
}


module.exports = DB_Conn;

