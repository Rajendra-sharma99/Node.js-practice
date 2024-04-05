const mongoose = require('mongoose');

// const main = async() =>{
//     await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
//     const productsSchema = new mongoose.Schema({
//         name:String,
//         price:Number
//     })
//     const productsModel = mongoose.model('products', productsSchema);
//     let data = new productsModel({name:"m8", price:1000});
//     let result = await data.save();
//     console.log(result);
// }
// main();

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
const productsSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    categry: String
})

const SaveInDB = async () => {
    const productsModel = mongoose.model('products', productsSchema);
    let data = new productsModel(
        {
            name: "NEW_Phone",
            brand: "New",
            price: 1000,
            categry: "mobile"
        }
    );
    let result = await data.save();
    console.log(result);
}



const UpdateInDB = async () => {
    const product = mongoose.model('products', productsSchema);
    // const data = await product.updateOne(
    //     {name:"m8"},
    //     {
    //         $set: {price:70000,brand: "Iphone", categry: "mobile"}
    //     }
    // )

    const data = await product.updateMany(
        { name: "m8" },
        {
            $set: { price: 70000, brand: "Iphone", categry: "mobile" }
        }
    )
    console.log(data);
}


const DeleateInDB = async () => {
    // const product = mongoose.model('products', productsSchema);
    // let data = await product.deleteOne(
    //     {name: 'm8'}
    // )

    const product = mongoose.model('products', productsSchema);
    let data = await product.deleteMany(
        {name: 'm8'}
    )
    console.log(data);
}


const findData = async() => {
    const product = mongoose.model('product', productsSchema);
    let data = await product.find({name:'max pro 8'});
    console.log(data);
}
findData();