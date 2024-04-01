const dbconnect = require('./mongodb');

 const readData = async ()=> {
   let data = await dbconnect();
   data = await data.find().toArray();
   // For Searching Purpose I can put any atribute in inside of find like that ->  {name: 'max pro 5'}
   console.log(data);
 }

readData();