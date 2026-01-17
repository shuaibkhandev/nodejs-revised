// const {add, sub} = require("./math");
const fs = require("fs");
const os = require("os");
// console.log("Hello World");


// console.log(add(5,7));
// console.log(sub(10,4));

// with synchronous 
// const res  = fs.writeFileSync("test.txt", "Hey There!");

// with Asynchronous 
// fs.writeFile("test.txt", "Hey There from Async", (err)=>{});

// const res = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(res);

// fs.readFile("./contacts.txt", "utf-8", (err, res)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);    
//     }
// })

console.log(os.cpus().length);
