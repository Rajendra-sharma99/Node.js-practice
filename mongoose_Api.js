

const express = require('express');
require('./config');
const product = require('./product')
const app = express();

// This is necessary to write for converting to data in JSON while coming data through post method bcz data is coming in string formatr
app.use(express.json());

app.post('/create', async (req, res) => {
    let data = new product(req.body);
    let result = await data.save();
    console.log(req.body);
    res.send(result);
})

app.get('/readData', async (req, res) => {
    let data = await product.find();
    // let result = await data.find().toArray();
    res.send(data);
})



app.delete('/delete', async (req, res) => {
    let data = await product.deleteOne(
        { name: 'T2' }
    )
    res.send("done");
})


app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params);
    let data = await product.deleteOne(req.params);
    res.send(data);
})

app.put('/update', async(req, res) => {
    // console.log(req.params);
    let data = await product.updateOne(
        { name: "max pro 8"},
        {
            $set: { price: 70000, brand: "Iphone", categry: "mobile" }
        }
    );
    res.send(data);
})

app.put('/update/:_id', async(req, res) => {
    console.log(req.params);
    let data = await product.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    res.send(data);
})

// Manually Search
// app.get('/search', async (req, res) => {
//     let data = await product.find({ name: 'max pro 8' });
//     res.send(data);
// })

// Single Searching
// app.get("/search/:key", async(req, res) => {
//     console.log(req.params.key);
//     let data = await product.find(
//         {
//             "$or":[
//                 {"name": {$regex: req.params.key}}
//             ]
//         }
//     );
//     res.send(data);
// })

// Multiple Seaching
app.get("/search/:key", async(req, res) => {
    console.log(req.params.key);
    let data = await product.find(
        {
            "$or":[
                {"name": {$regex: req.params.key}},
                {"brand": {$regex: req.params.key}},
                {"categry": {$regex: req.params.key}}
            ]
        }
    );
    res.send(data);
})




// Server Start
app.listen(5000, () => {
    console.log("App is running on port 5000");
})