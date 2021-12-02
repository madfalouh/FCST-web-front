import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './chatcss.css'
const jwt = require("jsonwebtoken");
var i=0 ;
var currentUser = {id: null};

// This page is currently a example -> Have to be changed
function ChatPage() {
  const decoded_token = jwt.verify(sessionStorage.getItem('__TOKEN__'), 'tokenkey');
  const [socket, setSocket] = useState(null);
  const [content, setContent] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [allMessages, setAllMessage] = useState([]);
  const [allMessagesToShow, setAllMessageToShow] = useState([]);
  const messageR = [];
  const messageS = [];
  const [RenderMessageOnclick, setRenderMessageOnclick] = useState([]);
  const [RenderMessageOnsend, setRenderMessageOnsend] = useState([]);

  useEffect(() => {
    if (!socket) {
      // Socket to use
      var newSocket = new WebSocket(`${process.env.REACT_APP_BASE_WEBSOCKET_URL}/chats?id=${decoded_token.user_id}`); 
      newSocket.onmessage = function (event) {
        const msg = JSON.parse(event.data);

        if(msg.sender === decoded_token.user_id) {
          setRenderMessageOnsend(RenderMessageOnsend.concat(
            <li className="me" key={msg.id}>
              <div className="entete">
                <h2></h2>
                <span className="status blue"></span>
              </div>
              <div className="message">
                  {msg.content}
              </div>
            </li>
          )); 
          i++;  
        }

        if(msg.receiver === decoded_token.user_id && currentUser.id === msg.sender) {
            setRenderMessageOnsend(RenderMessageOnsend.concat(
            <li className="you" key={msg.id}>
              <div className="entete">
                <h2></h2>
                <span className="status blue"></span>
              </div>
              <div className="message">
                {msg.content}
              </div>
            </li>
          ));
          i++;   
        }

        setAllMessageToShow([...allMessagesToShow, msg]);
        setAllMessage([...allMessages, msg]);
      };
      setSocket(newSocket);
    }
  }, []);

  const Render = () => {
    return (
      <div className="conversation" >
        {
           allMessagesToShow.map((message) => {
             if (message.sender.id === decoded_token.user_id) {
               return (
                <li className="me" key={message.id} id="me">
                  <div className="entete">
                    <span className="status blue"></span>
                  </div>
                  
                  <div className="message">
                  <div > {message.content}</div >
                  </div>
                </li>
              )
             } else if (message.receiver.id === decoded_token.user_id){
               return (
                <li className="you" key={message.id} id="you">
                  <div className="entete">
                    <span className="status blue"></span>
                  </div>
              
                  <div className="message">
                  <div > {message.content}</div >
                  </div>
                </li>
               )
             }
           })
        }
      </div>
    )
  };

  useEffect(() => {
    const fetchUsers = async () => {
      await axios({
        method: 'get',
        url: `http://localhost:3000/api/messages/user/${decoded_token.user_id}`,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('__TOKEN__')
        },
      }).then((response) => {
        const users = [];
        const messages = [];
        response.data.forEach((message) => {

          messages.push(message);

          if (message.receiver.id !== decoded_token.user_id && !users.some(user => user.id === message.receiver.id)) {
            users.push(message.receiver);
          }
          if (message.sender.id !== decoded_token.user_id && !users.some(user => user.id === message.sender.id)) {
            users.push(message.sender);
          }
        });
        setAllUsers(users);
        setAllMessage(messages);
      }).catch((error) => {
        console.error('There was an error!', error);
      });
    }

    fetchUsers();
  }, [])

  // Listen for messages
  const handleChangeCurrentUser = (index, event) => {
    if (i > 1) {
      window.location.reload(false);
      i = 0;
    }
    const messages = [];
    currentUser = allUsers[index];
    allMessages.forEach((message) => {
      if(message.receiver.id === allUsers[index].id && message.sender.id === decoded_token.user_id) {
        messages.push(message);
      }
      if(message.sender.id === allUsers[index].id && message.receiver.id === decoded_token.user_id) {
        messages.push(message);
      }
    });
    setAllMessageToShow(messages);

    setRenderMessageOnclick(RenderMessageOnclick.concat(<Render key={RenderMessageOnclick.length}/>));
    i++;
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
      <div id="container">
        <aside>
          <ul>
            {
              allUsers.map((user, index) => {
                return ( 
                  <li key={user.id} onClick={() => handleChangeCurrentUser(index)}>
                    <h2>{user.lastName}</h2>
                    <h3>
                      <span className="status orange"></span>
                      offline
                    </h3>
                  </li>
                );
              } , this)
            }
          </ul>
        </aside>
        <main>
          <ul id="chat">
            {RenderMessageOnclick}
            {RenderMessageOnsend}
          </ul>
          <footer>
            <textarea placeholder="Type your message" onChange={handleChange}></textarea>
            <button onClick={sendMessage}>Send</button>
          </footer>
        </main>
      </div>
    </>
  );
}

export default ChatPage;