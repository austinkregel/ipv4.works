const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  const ip = (req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null)).replace('::ffff:', '')


  res.write(ip.replace('::ffff:', ''))
  res.end();
}).listen(80);
