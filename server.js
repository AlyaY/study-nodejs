
const http = require('http');
const url = require('url');
const fs = require('fs');

const dt = require('./modules/dateTime');

http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

http.createServer(function(req, res) {
    const query = url.parse(req.url, true).query;

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write(`<h1>Hello World!</h1>
               <p>Today is: ${dt.dateTime()}</p>
               <p>Url is: <b>${req.url}</b></p>
               <p>Parse url is: <b>${JSON.stringify(query)}</b></p>
            `);
    
    res.end();
}).listen(8081);