let express = require('express');
let productRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const url = process.env.MongoUrl;



function router(menu){

    // default products
    productRouter.route('/')
        .get((req,res) => {
            mongodb.connect(url,function(err,dc){
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
            const id = req.params.id
            res.send(id)
        })

    //detail route of products
    productRouter.route('/details')
        .get((req,res) => {
            res.send('Products Details')
        })

    return productRouter

}

module.exports = router
