let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 7600;
let morgan = require('morgan');
let fs = require('fs');

//middleware
app.use(morgan('dev',{stream:fs.createWriteStream('./app.log')}))

var menu = [
    {name:'Category',link:'/category'},
    {name:'Products',link:'/products'}
]

let categoryRouter = require('./src/controller/categoeryRouter')(menu)
let productRouter = require('./src/controller/productRouter')(menu)

//static file path
app.use(express.static(__dirname+'/public'));
//html file path
app.set('views','./src/views')
// view engine name
app.set('view engine', 'ejs')

// default
app.get('/',(req,res)=>{
    res.send('Hiii From express');
});

app.use('/category',categoryRouter);
app.use('/products',productRouter);

app.listen(port,(err)=>{
    if(err) throw err;
    else{
        console.log('Server is running on port '+port);
    }
});