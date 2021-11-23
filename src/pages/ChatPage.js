import React from 'react';
import '../index.css';

// Socket to use
const socket = new WebSocket(`${process.env.REACT_APP_BASE_WEBSOCKET_URL}/chats?name=test`);

// This page is currently a example -> Have to be changed
function ChatPage() {

  // Connection opened
  socket.addEventListener('open', function (event) {
      console.log('Connected to WS Server')
  });

  // Listen for messages
  socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
  });

  // Example in order to use the websocket
  const sendMessage = () => {
      socket.send('Hello From Client2!');
  }

  return (
    <>
    <button onClick={sendMessage}>HERE</button>
    </>
  );
}

export default ChatPage;
