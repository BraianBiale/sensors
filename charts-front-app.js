const http = require('http');
var fs = require('fs');
var index = fs.readFileSync('charts-front.html');

const hostname = 'localhost';
const port = 3002;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(index);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
