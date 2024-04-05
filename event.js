const express = require('express');

// EventEmitter is class name that why i had writw in capital letter
const EventEmitter = require('events');

const app = express();
const event = new EventEmitter();

let count = 0;
event.on("countAPI", ()=> {
    count++;
    console.log("event call", count);
})

app.get('/', (req, res) => {
    res.send("Hi This is Simple Api");
     event.emit("countAPI");
})

app.get('/search', (req, res) => {
    res.send("Hi This is Simple Api");
    event.emit("countAPI");
})
app.get('/update', (req, res) => {
    res.send("Hi This is Simple Api");
    event.emit("countAPI");
})

app.listen(5000,() => {
    console.log("app is running on port 5000");
})
