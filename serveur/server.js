const http = require('http');
const server = http.createServer( (req, res) => {
    // console.log(req);
    // console.log(res);

    try {
        // Début MIDDLEWARE d'interception
        console.log(req.httpVersion, req.url, req.method);
        // Fin MIDDLEWARE
        
        if (req.url === '/') {
            // console.log(a);
            res.writeHead(200, { 'content-type': 'text/html' });    
            res.write("<h1>Homepage</h1>");
            res.end();
            
        }

        else{
            res.writeHead(404, { 'content-type': 'text/html' });    
            res.write("<h1>404 not found ... cette page n'existe pas</h1>");
            res.end();
    
        }
        
    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/html' });    
        res.write("<h1>500 Internal error</h1>");
        res.end();
    }
});

// Enveloppe 
// Header (pairs clés-valeurs)
// Body

// curl -v localhost:3000                               // Affiche la req envoyé et res reçu
// *   Trying 127.0.0.1:3000...
// * Connected to localhost (127.0.0.1) port 3000 (#0)
// > GET / HTTP/1.1                                     // STARLINE
// > Host: localhost:3000
// > User-Agent: curl/7.79.1
// > Accept: */*

server.listen(3000);

console.log("server écoute sur le port 3000");