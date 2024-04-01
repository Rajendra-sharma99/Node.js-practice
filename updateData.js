const dbConnect = require('./mongodb')

const updateData = async ()=>{
    let data = await dbConnect();

    let result = await data.updateOne(

        { name:'max pro 6'},
        {
            $set:{name:'max pro 8', price:1000}    // Mutiple atribute can be change by using seprated by commas
        }

        )


    console.log(result)
}


updateData();