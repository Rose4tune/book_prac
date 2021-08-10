var fs = require('fs');

// errer 발생 시 처리 함수
var handleError = function (err, res) {
  fs.readFile('app/error.html', function (err, data) {
    res.end(data);
  })
  res.writeHead(404);
}

module.exports = handleError;
