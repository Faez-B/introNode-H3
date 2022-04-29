const http = require('http');
const server = http.createServer();

server.on('connection', (socket) => {
    console.log("on a reçu une connexion");
})

server.listen(3000);

console.log("server écoute sur le port 3000");