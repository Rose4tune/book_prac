const express = require('express');
const socket = require('socket.io');
const http = require('http');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use('/css', express.static('./static/css'));
app.use('/js', express.static('./static/js'));

// Get 방식으로 / 경로에 접속하면 실행
app.get('/', function(request, response) {
  console.log('유저가 / 으로 접속함');
  fs.readFile('./static/index.html', function(err, data) {
    if(err) {
      response.send('에러....ㅠㅠ');
    } else {
      response.writeHead(200, {'Content-Type':'texs/html'});
      response.write(data);
      response.end();
    }
  })
})

// 서버 8080 포트로 연결
server.listen(8080, function() {
  console.log('서버 실행 중');
});
