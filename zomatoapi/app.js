let express = require('express');
let app = express();
let mongo = require('mongo');
let MongoClient = mongo.MongoClient;
let dotenv = require('dotenv');
dotenv.config()
let mongoUrl = process.env.mongoUrl;
let bodyParser = require('body-parser');
let cors = require('cors');
let port = process.env.PORT || 2300;
let db;

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

//get heart beat
app.get('/',(req,res) => {
    res.status(200).send('Health Ok')
})



// db connection
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('error while connecting to mongo');
    db = client.db('internfeb');
    app.listen(port,() => {
        console.log(`Running on the port ${port}`)
    })
})



//{useNewUrlParser: true }