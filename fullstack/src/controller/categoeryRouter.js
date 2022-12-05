let express = require('express');
let categoryRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const url = process.env.MongoUrl;

function router(menu){
    //default route of category
    categoryRouter.route('/')
        .get((req,res) => {
            //res.send(categoryData)
            mongodb.connect(url,{useNewUrlParser: true },function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                   let dbObj = dc.db('aug9');
                   dbObj.collection('category').find().toArray(function(err,data){
                       if(err){
                           res.status(400).send('Error While Fetching')
                       }else{
                           res.status(200).render('category',{title:'Categories',catData:data,menu})
                       }
                   })
                }
            })
        })

    //detail route of category
    categoryRouter.route('/details')
        .get((req,res) => {
            res.send('Category Details')
        })

    return categoryRouter

}

module.exports = router