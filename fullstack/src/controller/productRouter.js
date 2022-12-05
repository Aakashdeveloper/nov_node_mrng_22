let express = require('express');
let productRouter = express.Router();
let mongo = require('mongodb');
const mongodb = mongo.MongoClient;
const url = process.env.MongoUrl;


function router(menu){

    // default products
    productRouter.route('/')
        .get((req,res) => {
            mongodb.connect(url,{useNewUrlParser: true },function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                   let dbObj = dc.db('aug9');
                   dbObj.collection('products').find().toArray(function(err,proddata){
                       if(err){
                           res.status(400).send('Error While Fetching')
                       }else{
                           res.status(200).render('product',{title:'Products',proddata,menu})
                       }
                   })
                }
            })
        })

    productRouter.route('/category/:id')
        .get(function(req,res){
            //const id = req.params.id
            let {id} = req.params
            mongodb.connect(url,function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                   let dbObj = dc.db('aug9');
                   dbObj.collection('products').find({'category_id':Number(id)}).toArray(function(err,proddata){
                       if(err){
                           res.status(400).send('Error While Fetching')
                       }else{
                           res.status(200).render('product',{title:'Products',proddata,menu})
                       }
                   })
                }
            })
        })

    //detail route of products
    productRouter.route('/details/:id')
        .get((req,res) => {
            let id = mongo.ObjectId(req.params.id)
            mongodb.connect(url,{ useNewUrlParser: true },function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                   let dbObj = dc.db('aug9');
                   dbObj.collection('products').find({'_id':id}).toArray(function(err,data){
                       console.log(data)
                       if(err){
                           res.status(400).send('Error While Fetching')
                       }else{
                           res.status(200).render('productDetails',{data,menu})
                       }
                   })
                }
            })
        })

    return productRouter

}

module.exports = router
