var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
  port: port
});
var messages = [];

console.log('websockets server started');

// 웹소켓 서버의 connection event를 위한 콜백 설정
ws.on('connection', function (socket) {
  console.log('client connection established');

  // 이전 모든 데이터 전송
  messages.forEach(function (msg) {
    socket.send(msg);
  });

  // Echo 기능 추가
  socket.on('message', function (data) {
    console.log('message received : ' + data);
    // 새로운 메시지를 배열에 추가
    messages.push(data);
    // clients 속성을 통해 파악되는 연결(반복해서 접근 가능한 배열)을 이용
    // 반복적으로 메시지 보내기
    ws.clients.forEach(function (clientSocket) {
      clientSocket.send(data);
    });
  });
});
