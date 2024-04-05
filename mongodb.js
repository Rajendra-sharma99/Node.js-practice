const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
// const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);
const databaseName = 'e-comm';
const collectionName = 'products';

async function dbconnect() {
      let result = await client.connect();
      let db = result.db(databaseName);
      let collection = db.collection(collectionName);
      return collection;
      // console.log(collection);
}
module.exports = dbconnect;
// dbconnect();




// const { MongoClient } = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const databaseName = 'e-comm';
// const collectionName = 'products';

// async function dbconnect() {
//     try {
//         const client = new MongoClient("mongodb://localhost:27017/e-comm", );
//         await client.connect();
//         const db = client.db(databaseName);
//         const collection = db.collection(collectionName);
//         console.log('Connected to MongoDB');
//         console.log(collection);
//         // Do something with the collection here
//         // For example, you can perform CRUD operations on the collection
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// dbconnect();
