const express = require('express');
require('dotenv').config({ debug: true })
const { MongoClient, ServerApiVersion } = require('mongodb');

const cors = require('cors');
const app=express()
const port=process.env.PORT||5000

app.use(express.json())
app.use(cors())


const uri = `mongodb+srv://${process.env.AAMADAT_USER}:${process.env.AAMADAT_PASS}@amadatmartcluster.iyjvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run= async()=>{
    try{
        await client.connect();
        const homeProductCollection = client.db("Products").collection("homepage");
        const AllproductCollection = client.db("Products").collection("allProducts")
        
    }
    finally{

    }

}
run().catch(console.dir)







app.get('/',(req,res)=>{
    res.send('Aamdatmart')
})
app.listen(port)