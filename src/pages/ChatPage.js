import React, { useEffect, useState } from 'react';
import '../index.css';
import axios from 'axios';
const jwt = require("jsonwebtoken");


// Socket to use
const socket = new WebSocket(`${process.env.REACT_APP_BASE_WEBSOCKET_URL}/chats`);

// This page is currently a example -> Have to be changed
function ChatPage() {

  const decoded_token = jwt.verify(sessionStorage.getItem('__TOKEN__'), process.env.REACT_APP_TOKEN_KEY);
  const [content, setContent] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_BASE_API_URL}/messages/user/${decoded_token.user_id}`,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('__TOKEN__')
        },
      }).then((response) => {
        const users = [];
        response.data.forEach((message) => {
          if (message.receiver.id !== decoded_token.user_id && !users.some(user => user.id === message.receiver.id)) {
            users.push(message.receiver);
          }
          if (message.sender.id !== decoded_token.user_id && !users.some(user => user.id === message.sender.id)){
            users.push(message.sender);
          }
        });
        setAllUsers(users);
      }).catch((error) => {
          console.error('There was an error!', error);
      });
    }

    fetchUsers();
  }, [])

  
  // Connection opened
  socket.addEventListener('open', function (event) {
      console.log('Connected to WS Server')
  });

  // Listen for messages
  socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
  });

  const handleChangeCurrentUser = (event) => {
    event.preventDefault();
    setCurrentUser(allUsers[event.target.value]);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  }
  // Example in order to use the websocket
  const sendMessage = (event) => {
      event.preventDefault();
      socket.send(JSON.stringify(
        {
          content: content,
          sender: decoded_token.user_id,
          receiver: currentUser.id
        }
      ));
  }

  return (
    <>
      <ul>
        {
          allUsers.map((user) => {
            return <li key={user.id} onClick={handleChangeCurrentUser}>{user.email} - {user.lastName}</li>;
          })
        }
      </ul>
      <br></br><br></br>
      <button onClick={sendMessage}>HERE</button>
      <input type="text" onChange={handleChange} />
    </>
  );
}

export default ChatPage;
