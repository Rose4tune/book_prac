var socket = io();

// 접속 되었을 때 메시지 수신 실행
socket.on('connect', function() {
  var input = document.getElementById('test')
  input.value = '접속!';
});

//  버튼 눌를 때 메시지 전송 실행
function send() {
  var message = document.getElementById('test').value;
  console.log(message);
  document.getElementById('test').value = '';
  socket.emit('send', {msg: message});
};
