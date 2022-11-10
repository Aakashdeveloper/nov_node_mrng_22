let os = require('os');
console.log(os.platform())  //darwin
console.log(os.arch()) //x64
console.log(os.cpus().length+ " core")  //4 core
console.log(os.freemem())  //1542971392 bytes
console.log(os.uptime()) //432895
console.log(os.hostname())  //Aakashs-MacBook-Air.local