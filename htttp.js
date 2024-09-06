const http = require('node:http');

http.createServer((req, res) => {
    res.write('Hola, esto es desde node');
    res.end();
}).listen(3000);


