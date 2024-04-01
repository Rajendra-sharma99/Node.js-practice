const dbConnect = require('./mongodb');

const insertData = async () => {
    const db = await dbConnect();

      /* ------------------ Insert single Data ----------------------*/
    // const insertDataInDB = await db.insertOne(
    //     {name:'hot ABCD', brand: 'infinix', price: '1000', categry: 'Mobile'}
    // )

      /* ------------------ Insert Multiple Data ----------------------*/
     const insertDataInDB = await db.insertMany(
        [
            {name:'hot star A', brand: 'infinix', price: '1000', categry: 'Mobile'},
            {name:'hot star B', brand: 'infinix', price: '1000', categry: 'Mobile'},
            {name:'hot star C', brand: 'infinix', price: '1000', categry: 'Mobile'},
            {name:'hot star D', brand: 'infinix', price: '1000', categry: 'Mobile'}
        ]
     )

   if(insertDataInDB.acknowledged) {
    console.log('Insertion create sucessfully');
     }
}
insertData();




