const EventEmitter = require("events");
const emitter = new EventEmitter();
const count = require("./count.json");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "count.json");


// emitter.on("greet", ()=>{
//     console.log(`Hello Shuaib Khan`);
// })
// emitter.on("greet", ()=>{
//     console.log(`Hello Shuaib`);
// })

// emitter.emit("greet");

function saveCount(){
fs.writeFileSync(filePath, JSON.stringify(count));
}

emitter.on("user-login", (username)=>{
    count['user-login']++;
    saveCount()
console.log(`Welcome ${username}.`)
});
emitter.on("user-purchase", (username, item_purchased)=>{
    count["user-purchase"]++
    saveCount()
    console.log(`Hello ${username}, You purchased ${item_purchased}.`);
    
});
emitter.on("user-profile-update", (username)=>{
    count["user-profile-update"]++;
    saveCount()
    console.log(`Hello ${username}, Your profile has been updated.`)
});
emitter.on("user-logout", (username)=>{
    count['user-logout']++;
    saveCount()
    console.log(`Good Bye ${username}.`)
});

emitter.emit("user-login", "Asad Ali");
emitter.emit("user-purchase","Asad Ali", "Smart Watch");
emitter.emit("user-profile-update","Asad Ali");
emitter.emit("user-logout", "Asad Ali");
// emitter.emit("user-logout", "Asad Ali");

emitter.on("summery", () => {
    console.log(count);
    
})

emitter.emit("summery")