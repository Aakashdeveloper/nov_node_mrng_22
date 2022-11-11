let fs = require('fs');

// fs.writeFile('mycode.txt','This is about fs',function(err){
//     if(err) throw err;
//     console.log('Task Done')
// })

// fs.writeFile('mycode.txt','I am working on node',()=>{
//     console.log('Task Done')
// })


// fs.appendFile('mytext.txt','I am working on append \n',()=>{
//     console.log('Task Done')
// })

//Read File
// fs.readFile('location.json','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })


//delete file
// fs.unlink('mycode.txt',(err)=>{
//     if(err) throw err;
//     console.log('Task done')
// })

//Rename file
fs.rename('mytext.txt','mydata.txt',(err)=>{
    if(err) throw err;
    console.log('Task done')
})
