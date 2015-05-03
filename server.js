var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('I WILL PUT SOMETHING HERE SOON.');
}).listen(5010);
console.log('Server running at 5010');