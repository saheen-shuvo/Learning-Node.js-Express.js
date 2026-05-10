const http = require('http');

//creating a server using raw node.js
const server = http.createServer();

//listener
server.on('request', (req, res) => {
    console.log(req);
    res.end('Hello, World!');
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});