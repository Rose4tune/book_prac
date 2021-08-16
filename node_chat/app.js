const express = require('express');
const socket = require('socket.io');
const http = require('http');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socket(server);

// css js 파일 사용 설정
app.use('/css', express.static('./static/css'));
app.use('/js', express.static('./static/js'));

// Get 방식으로 / 경로에 접속하면 index.html실행
app.get('/', function(request, response) {
  // console.log('유저가 / 으로 접속함');
  fs.readFile('./static/index.html', function(err, data) {
    if(err) {
      response.send('에러ㅠㅠ');
    } else {
      response.writeHead(200, {'Content-Type':'text/html'});
      response.write(data);
      response.end();
    }
  });
});

// 소켓에서 connection 이벤트 받으면 콜백 실행
// sockets : 접속되는 모든 소켓들
// socket : 접속과 동시에 콜백함수로 전달되는 소켓
io.sockets.on('connection', function(socket) {
  console.log('유저 접속 됨');

  // (정의 이벤트) 새로운 유저가 접속했을 때 다른 소켓에도 알려줌
  socket.on('newUser', function(name) {
    console.log(name + ' 님이 접속하였습니다.');
    // 소켓에 이름 저장
    socket.name = name;
    // 모든 소켓(io.socket.emit)에 전송
    io.sockets.emit('update', {type: 'connect', message: name + ' 님이 접속하였습니다.'});
  });

  // (정의 이벤트) 전송한 메시지 받기
  socket.on('message', function(data) {
    // 받은 데이터 누가 보냈는지 이름 추가
    console.log(data);
    data.name = socket.name;
    // 보낸 사람 제외한 나머지 유저(socket.broadcast.emit)에게 메시지 전송
    socket.broadcast.emit('update', data);
  })

  // (정의 이벤트)
  // socket.on('send', function(data) {
  //   console.log('전달된 메시지 : ' + data.msg);
  // });

  // (socket.io의 기본 이벤트) : 소켓과 접속이 끊어지면 자동 실행 됨.
  socket.on('disconnect', function() {
    console.log(socket.name + '님이 나가셨습니다.');
    // 나가는 사람을 제외한 나머지 유저(socket.broadcast.emit에게 메시지 전송
    socket.broadcast.emit('update', {type: 'disconnect', message: socket.name + '님이 나가셨습니다.'});
  });
});



// 서버 8080 포트로 연결
server.listen(8080, function() {
  console.log('서버 실행 중');
});
