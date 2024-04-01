const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const databaseName = 'e-comm';
const collectionName = 'products';


async function dbconnect() {
      let result = await client.connect();
      let db = result.db(databaseName);
      let collection = db.collection(collectionName);
      return collection;
}
module.exports = dbconnect;