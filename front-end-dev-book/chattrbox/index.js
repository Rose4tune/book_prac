var http = require('http');
var fs = require('fs');
var extract = require('./extract'); // extract 모듈 불러옴

// errer 발생 시 처리 함수
var handleError = function (err, res) {
  fs.readFile('app/error.html', function (err, data) {
    res.end(data);
  })
  res.writeHead(404);
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
      // MIME타입 명시하여 처리 (아래는 HTML을 위한 MIME타입)
      // cmd에서 (npm install mime) 으로 모듈설치, MIME타입 자동제공 가능
      res.setHeader('content-Type', 'text/html');
      res.end(data);
    }
  })
});

server.listen(3000);
