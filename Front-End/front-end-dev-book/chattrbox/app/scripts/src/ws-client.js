let socket;
console.log('socket : ' + socket);

function init (url) {
  socket = new WebSocket(url);
  console.log('connecting...');
};

function registerOpenHandler (handlerFunction) {
  socket.onopen = () => {
    console.log('open');
    handlerFunction();
  }
};

function registerMessageHandler (handlerFunction) {
  socket.onmessage = (e) => {
    console.log('message', e);
    // let data = JSON.parse(e.data);
    let data = e.data;
    handlerFunction(data);
  }
  console.log(handlerFunction);
};

function sendMessage (payload) {
  console.log(payload);
  // console.log(JSON.stringify(payload));
  socket.send(payload);
};

export default {
  init,
  registerOpenHandler,
  registerMessageHandler,
  sendMessage
};
