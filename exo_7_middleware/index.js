const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // ICI MIDDLEWARE A EXECUTER AVANT DE TRAITER LA REQUETE.
    console.log(req.httpVersion, req.url, req.method);
    // FIN MIDDLEWARE
    if (req.url === "/") {
      res.writeHead(200, {'content-type':'text/html'});
      res.write('<h1>HOMEPAGE</h1>');
      res.end();
    } else {
      res.writeHead(404, {'content-type':'text/html'});
      res.write('<h1>404 Not Found</h1>');
      res.end()
    }
  } catch (err) {
    res.writeHead(500, {'content-type':'text/html'});
    res.write('<h1>500 Internal Server Error</h1>');
    res.end()
  }
} );

server.listen(3000);
console.log('Server écoute sur le port 3000');