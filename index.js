// const http = require('http');
// http.createServer((req, res) => {
//   res.write("Hi This is Rajendra mca postgraduate of nit jamshedpur");
//   res.end();
// }).listen(8000);

// const colors = require('colors');
// console.log("rajendra".red);
// console.log("Hi This is Rajendra sharma".blue);
// console.log("Try Nodemon new");

// const http = require('http');
// const data = require('./data')
// const app = require('./app');

// http.createServer((req,res) => {
//     // res.writeHead(200,{'Content-Type':'application\Json'})
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(8000);
// console.log(process.argv[0]);

// const fs = require('fs');
// const input = process.argv;
// fs.writeFileSync(argv[])

// console.log('Hi This is First Execution');
// let a = 10;
// let b = 0;

//  let Waiting_data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(30);
//      },3000);
//  })

//  Waiting_data.then((data) => {
//     b = data;
//     console.log(a+b);
//  })
//  console.log();

//Express 

// const Express = require('express');
// const app = Express();
// const path = require('path');


// const reqfilter = (req,res,next) =>{
//    if(!req.query.age) {
//       res.send('please provide age');
//    }
//   else if(req.query.age < 18) {
//       res.send('You are under age');
//    } else {
//       next();
//    }
// }
// app.use(reqfilter);
// const publicpath = path.join(__dirname, 'public');
// console.log(publicpath);

// app.use(Express.static(publicpath));
// app.get('',(req, res) => {
//    res.send("Hi This is rajendra sharma");
// })
// app.get('/about',(req,res) => {
//    res.send("Hi This is about page");
// })

// app.get('/contact',(req, res) => {
//    res.send("Hi This is contact page");
// })

// app.set('view engine', 'ejs');

// app.get('',(req,res) => {
//    res.send('Hi This is rajendra sharma');
// })

// app.get('/profile',(_,res)=> {

//    const user = {
//       name : 'rajendra',
//       email : 'rajendra@gmail.com',
//       city : 'Daltonganj'
//    }
//    res.render('profile',{user});
// // })




// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';

// async function dbconnect() {
//    let result = await client.connect();
//    let db = result.db(database);
//    let collection = db.collection('products');
//    return collection;
//    // let response = await collection.find({}).toArray();
//    // console.log(response);
// }





const dbconnect = require('./mongodb');

 const main = async ()=> {
   let data = await dbconnect();
   data = await data.find().toArray();
   console.log(data);
 }

main();





