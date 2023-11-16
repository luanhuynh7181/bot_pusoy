
const port = process.env.PORT || 3000;
var http = require('http');
var url  = require('url');


var server = http.createServer(function (req, res) {

    var path = url.parse(req.url, true);


    if(path.pathname == '/test'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            customerName : 'abc',
            purchase : 200,
            deliverDate : new Date()
        }));
        return ;
    }
        res.end('Wrong Path !!! - API not Found ');


})

server.listen(port);
