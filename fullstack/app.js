let express = require('express');
let app = express();
let port = 7600;

// default
app.get('/',(req,res)=>{
    res.send('Hiii From express');
});

app.get('/location',(req,res) => {
    res.send('<h1>This is Location Route</h1>');
});

app.get('/restaurant',(req,res) => {
    res.send('<h1>This is Restaurant Route</h1>');
});

app.listen(port,(err)=>{
    if(err) throw err;
    else{
        console.log('Server is running on port '+port);
    }
});