let socket;

function init (url) {
  socket = new WebSocket(url);
  console.log('연결중...');
}

export default {
  init,
}
