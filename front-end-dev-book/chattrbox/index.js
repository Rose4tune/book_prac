var http = require('http');
var fs = require('fs');
var extract = require('./extract'); // extract 모듈 불러옴

var server = http.createServer(function(req, res) {
  console.log('Responding to a request');
  // extract 모듈을 사용하여 파일 경로 처리하도록 변경함
  var filePath = extract(req.url);
  fs.readFile(filePath, function (err, data) {
    res.end(data);
  })
});

server.listen(3000);
