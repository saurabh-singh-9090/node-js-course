const http = require('node:http');// or require('http');

const server = http.createServer(function(req, res){
    if(req.url === "/getSomeSecretData"){
        res.end("Here is your secret data");
    }
    res.end("Hello World");
});

server.listen(9999, () => {
    console.log("Server is running on port 9999");
}
);