const express = require('express');
const redis = require('redis');
const mongo = require('mongodb').MongoClient;
const mongoUrl = "mongodb://localhost:27017";
const port = process.env.PORT || 7600;
const app = express();
const client = redis.createClient({
    host:'localhost',
    port:6379
})

app.get('/data',(req,res) => {
    const userInput = (req.query.color).trim();
    return client.get(`${userInput}`,(err,result) => {
        //if data is in redis
        if(result){
            const output = JSON.parse(result);
            res.send(output)
        }else{
            //as data is not in redis fetch from mongodb
            mongo.connect(mongoUrl,(err,dc) => {
                if(err){
                    res.send(`Error While Connecting`)
                }else{
                    let dbObj = dc.db('aug9');
                    dbObj.collection('products').find({'Color':userInput}).toArray((err,result) =>{
                        ///first time save in redis
                        client.setex(`${userInput}`,3600,JSON.stringify({source:'Redis Cache',result}))
                        res.send({source:'MongoDb',result})
                    })
                }
            })
        }
    })
})

app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})