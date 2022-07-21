// index.js에서 파일 경로 처리하는 부분 가져와서 '사용자 정의 모듈 생성'
// 모듈식으로 유지보수하기 좋게하기 위해 함수 동작 세분화시켜 분리함
var path = require('path');

var extractFilePath = function(url) {
  var filePath;
  var fileName = 'index.html';

  if (url.length > 1) {
    fileName = url.substring(1);
  }
  console.log('The fileName is : ' + fileName);

  filePath = path.resolve(__dirname, 'app', fileName);
  return filePath;
};

// 다른 모듈에서 require 사용하여 extractFilePath 함수 불러 사용 가능하도록
// 전역 변수 module.export에 할당함
module.exports = extractFilePath;
