let http = require('http');

//req > what we send to server (params,queryParams,body)
//res > what server send in return 

let server = http.createServer((req,res)=>{
    res.write('<h1>This is NodeJs code server</h1>')
    res.end()
})

server.listen(7600)