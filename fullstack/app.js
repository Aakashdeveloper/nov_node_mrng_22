let express = require('express');
let app = express();
let port = 7600;
let categoryRouter = express.Router();
let productRouter = express.Router();

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