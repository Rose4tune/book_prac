var socket = io();

// 접속 되었을 때 메시지 수신 실행
socket.on('connect', function() {
  var name = prompt('반갑습니다!', ''); // 이름 입력 받음 (prompt: 텍스트 입력 대화상자 띄움)
  if (!name) { // 이름 빈칸인 경우 익명으로 지정
    name = '익명';
  };
  socket.emit('newUser', name); // 서버에 새로운 유저 접속 알림
});

// 서버에서 데이터 받을 때
socket.on('update', function(data) {
  var chat = document.getElementById('chat');
  var message = document.createElement('div');
  var node = document.createTextNode(`${data.name}: ${data.message}`);
  var className = '';

  // 타입에 따라 적용할 클래스 따로 지정
  switch(data.type) {
    case 'message':
      className = 'other'
      break

    case 'connect':
      className = 'connect'
      break

    case 'disconnect':
      className = 'disconnect'
      break
  }

  message.classList.add(className);
  message.appendChild(node);
  chat.appendChild(message);
})

//  버튼 눌를 때 메시지 전송 실행
function send() {
  var message = document.getElementById('test').value; // 입력 메시지 가져오기
  console.log(message);
  document.getElementById('test').value = ''; // 입력 데이터 빈칸으로 변경

  // 내가 전송할 메시지 클라이언트에게 표시
  var chat = document.getElementById('chat');
  var msg = document.createElement('div');
  var node = document.createTextNode(message);
  msg.classList.add('me');
  msg.appendChild(node);
  chat.appendChild(msg);

  // 서버로 message 이벤트 데이터와 함께 전달
  socket.emit('message', {type: 'message', message: message});
};
