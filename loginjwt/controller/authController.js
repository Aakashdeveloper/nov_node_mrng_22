const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../model/userSchema');

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json());

// get all the users
router.get('/users',(req,res) => {
    User.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//register User
router.post('/register',(req,res) => {
    //encrypt password
    let hashpassword = bcrypt.hashSync(req.body.password,8);
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashpassword,
        phone:req.body.phone,
        role:req.body.role?req.body.role:'User'
    },(err,data) => {
        if(err) return res.status(500).send('Error While Register')
        return res.status(200).send('Register Sucessful')
    })
})

//login User
router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) return res.send({auth:false,token:'Error While Login'})
        if(!user) return res.send({auth:false,token:'No User Found'})
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,user.password);
            if(!passIsValid) return res.send({auth:false,token:'Invalid Password'})
            // in case both matches generate token
            let token = jwt.sign({id:user._id},config.secret,{expiresIn:86400}) //24 hours
            res.status(200).send({auth:true,token:token})
        }
    })
})



module.exports = router