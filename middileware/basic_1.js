const express = require('express')
const app = express();

const middileware = ((req, res, next) => {
    console.log("hello from middileware");
    next();
})

// middileware();   

app.get('/',middileware,(req, res) => {
    res.send("Hi This is Home page");
})

app.get('/about',(req, res) => {
    res.send("Hello from about page");
})

app.get('/contact',(req,res) => {
    res.send("Hello from Contact page");
})
app.listen(5000);