const http = require('http');

const server = http.createServer((req, res) => {
  try {
    var difference = new Date();
    
    var start = new Date();
    // ICI MIDDLEWARE A EXECUTER AVANT DE TRAITER LA REQUETE.
    console.log(req.httpVersion, req.url, req.method);
    // FIN MIDDLEWARE
    var finish = new Date();

    // Do things here
    difference.setTime(finish.getTime() - start.getTime());
    console.log( difference.getMilliseconds() );

    process.exit(1);
    
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