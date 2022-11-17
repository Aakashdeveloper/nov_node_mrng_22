let express = require('express');
let app = express();
let port = 7600;
let categoryRouter = require('./src/controller/categoeryRouter')
let productRouter = require('./src/controller/productRouter');

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