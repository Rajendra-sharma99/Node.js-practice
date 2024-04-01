/*--------------------------Basic Server Create-----------------------------*/
// const http = require('http');
// http.createServer((req, res) => {
//   res.write("Hi This is Rajendra mca postgraduate of nit jamshedpur");
//   res.end();
// }).listen(8000);


/*--------------------------installing npm i color ------------------------*/
// const colors = require('colors');
// console.log("rajendra".red);
// console.log("Hi This is Rajendra sharma".blue);
// console.log("Try Nodemon new");



/* ------------------------ Handle Asynchonus using promises -------------------------------*/
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
/*--------------------------------------------------------------------------------------------*/


/*--------------------------------middileware---------------------------------*/
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




/*---------------------------------------------Database connection---------------------------*/
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
/*------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------file System-----------------------*/
// const fs = require('fs');
// fs.writeFileSync("hello.txt", "This is Rajendra here");
// console.log(__dirname);
// console.log(__filename);






// This is for connectimg public path and about.html and also i have build here multiple html pages
// const Express = require('express');
// const path = require('path');
// const app = Express();
// const publicpath = path.join(__dirname, 'public');

// app.use (Express.static(publicpath));
// app.set('view engine', 'ejs');

// app.get('/profile', (req, res) => {
//       res.render('profile');
// });

// app.listen(8000);



// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath=path.join(__dirname,'public')

// app.set('view engine','ejs');

// app.get('',(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// });

// app.get('/profile',(_,resp)=>{
//     const user={
//         name:'Peter',
//         email:'peter@test.com',
//         country:'USA'
//     }
//    resp.render('profile',{user})
// });




// app.get('/contact',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// });

// app.get('/help',(_,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
// });

// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/nopage.html`)
// });

// app.listen(5000);


