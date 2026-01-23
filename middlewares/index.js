const fs = require("fs");


function logReqRes(filename){
return (req, res, next)=>{
    console.log("Hello from Middleware");
    const data = `\n${Date.now()}: ${req.ip} ${req.method} ${req.path}`;
    fs.appendFile(filename, data, (err, data)=>{
        next();
    })
}
}

module.exports = {logReqRes}