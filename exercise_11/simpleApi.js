const http = require('http');
const data = require('./data');

http.createServer((req,res) => {
res.writeHead(500,{'Content-Type':'application\json'});

// resp.write(JSON.stringify(
//       [
//        { Name : "Rajendra Sharma", Email : "rajendrasm99@gmail.com"},
//        { Name : "Rajendra Sharma", Email : "rajendrasm99@gmail.com"},        // This things can be also acces through another file data 
//        { Name : "Rajendra Sharma", Email : "rajendrasm99@gmail.com"}
//       ]
//     ));

res.write(JSON.stringify(data));
res.end();
}).listen(5000);