const dbConnect = require('./mongodb');

const deleteData = async ()=>{
let data = await dbConnect();
let result = await data.deleteOne({name:'hot star D'})   // This will be delete only onle row
// let result = await data.deleteMany({name:'u40'})       // This will be Delete Multiple record or row with name :'u40'
console.log(result)

}

deleteData();