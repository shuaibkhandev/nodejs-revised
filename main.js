// const http = require("http");
const express = require("express");
const app = express();

// const myServer = http.createServer(app);


app.get("/", (req, res)=>{
    res.send("Hello from home page!!");
})

app.get("/about", (req, res)=>{
     res.send("Hello from about page!! " + req.query.name);
})



// myServer.listen(8000, ()=>{
//     console.log("Server running at port no 8000");
    
// })

app.listen(8000, ()=>console.log("Server running at port no 8000"))