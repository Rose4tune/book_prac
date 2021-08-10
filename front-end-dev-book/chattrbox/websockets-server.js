var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
  port: port
});

console.log('websockets server started');

// 웹소켓 서버의 connection event를 위한 콜백 설정
ws.on('connection', function (socket) {
  console.log('client connection established');

  // Echo 기능 추가
  socket.on('message', function (data) {
    console.log('eassage received : ' + data);
    socket.send(data);
  });
});
