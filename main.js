// const http = require("http");
const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const fs = require("fs");

// const myServer = http.createServer(app);


app.use(express.urlencoded({extended:false}));
app.use((req, res, next)=>{
    console.log("Hello from Middleware 1");
    next();
})

app.use((req, res, next)=>{
    console.log("Hello from Middleware 2");
    const data = `\n${Date.now()}: ${req.ip} ${req.method} ${req.path}`;
    fs.appendFile("log.txt", data, (err, data)=>{
        next();
    })
})

app.get("/", (req, res)=>{
    res.send(users);
})

app.get("/about", (req, res)=>{
     res.send("Hello from about page!! " + req.query.name);
})

app.post("/signup", (req, res) => {
    const data = req.body;
    users.push({...data})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err)=>{
        if (err) return res.status(500).send("Error writing file");
        res.send(users);
    })
})



// myServer.listen(8000, ()=>{
//     console.log("Server running at port no 8000");
    
// })

app.listen(8000, ()=>console.log("Server running at port no 8000"))