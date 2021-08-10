var http = require('http');
var fs = require('fs');
var extract = require('./extract'); // extract 모듈 불러옴

// errer 발생 시 처리 함수
var handleError = function (err, res) {
  res.writeHead(404);
  res.end();
}

var server = http.createServer(function(req, res) {
  console.log('Responding to a request');
  // extract 모듈을 사용하여 파일 경로 처리하도록 변경함
  var filePath = extract(req.url);
  fs.readFile(filePath, function (err, data) {
    // 에려 발생과 아닌 상황 구분하기
    if (err) {
      handleError(err, res);
      return;
    } else {
      res.end(data);
    }
  })
});

server.listen(3000);
