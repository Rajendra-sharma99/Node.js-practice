const express = require('express');
const dbConnect = require('./mongodb');     
const mongodb = require('mongodb'); 
const app = express();                       

app.use(express.json());

/*------------- Get Api For Read Data -------------------*/
app.get('/', async(req,res)=> {
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data);
    res.send(data);
});
 
/*------------- Post Api For send Data and also I can Store it On Database -------------------*/
app.post('/', async (req, res) => {

    // res.send({name : 'Anil'});
    // console.log(req.body);
    // res.send({name: 'Anil'});
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
    //  res.send(req.body);

})


/*-------------Put Api For Update Data-------------------*/
app.put('/', async(req, res) => {
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.body.name},
        { $set: req.body}
        )
    console.log(req.body);
  res.send({result : "result updated"});
})

/* ----------------Below code can be use for changing by sending localhost parameter using params  */
// app.put('/:name', async(req, res) => {
//     let data = await dbConnect();
//     let result = data.updateOne(
//         {name:req.params.name},
//         { $set: req.body}
//         )
//     console.log(req.body);
//   res.send({result : "result updated"});
// })


/*------------- Deleate Api For Deleate Data -------------------*/
app.delete('/:id', async (req, res) => {
    // console.log(req.params.id);
    let data = await dbConnect();
    // let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send(result);
})


// app.delete('/:id', async (req, res) => {
//     try {
//         let data = await dbConnect();
//         let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
//         res.send(result);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred while processing the request');
//     }
// });



// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});