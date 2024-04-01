const express = require('express');
const app = express();

const reqfilter = (req, res, next) => {
    if(!req.query.age) {
        res.send("Please Provide age");
    } else if(req.query.age < 18) {
        res.send("You are under age");
    } else {
        next();
    }
}

app.use(reqfilter);

app.get('./', (req, res) => {
    res.send("This is Home Page");
})

app.get('/about', (req, res) => {
     res.send("This is about Page");
})

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
