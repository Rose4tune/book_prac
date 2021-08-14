const express = require('express');
const socket = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socket(server);

// Get 방식으로 / 경로에 접속하면 실행
app.get('/', function(request, response) {
  console.log('유저가 / 으로 접속함');
  response.send('Hellow, Express Server!!');
})

// 서버 8080 포트로 연결
server.listen(8080, function() {
  console.log('서버 실행 중');
});
