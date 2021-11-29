import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './chatcss.css'
import { useHistory } from 'react-router';
const jwt = require("jsonwebtoken");
var i=0 ; 

// Socket to use
const socket = new WebSocket(`${process.env.REACT_APP_BASE_WEBSOCKET_URL}/chats`);

// This page is currently a example -> Have to be changed
function ChatPage() {

  let history = useHistory();
  const decoded_token = jwt.verify(sessionStorage.getItem('__TOKEN__'), 'tokenkey');
  const [content, setContent] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [allSenderMessage, setSenderMessage] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [id, setId] = useState("");
  const messageR = [];
  const messageS = [];
  const [RenderMessageOnclick, setRenderMessageOnclick] = useState([]);
  const [RenderMessageOnsend, setRenderMessageOnsend] = useState([]);

  const Render = () => {
    return (
      <div className="conversation" >
        {
          messageS.map((message) =>
              <li className="me" key={message.id} id="me">
                <div className="entete">
                  <span className="status blue"></span>
                </div>
                
                <div className="message">
                <div > {message.content}</div >
                </div>
              </li>
          )
        }
        {
          messageR.map((message) => 
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
        const messagesS = [];
        response.data.forEach((message) => {

          messages.push(message);

          setId(decoded_token.user_id);
          if (message.receiver.id !== decoded_token.user_id && !users.some(user => user.id === message.receiver.id)) {
            users.push(message.receiver);

            console.log(message.content);
          }
          if (message.sender.id !== decoded_token.user_id && !users.some(user => user.id === message.sender.id)) {
            users.push(message.sender);
          }
        });
        setAllUsers(users);

        setSenderMessage(messages);
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
  const handleChangeCurrentUser = (index, event) => {
    if( i>0 ) {
      history.push('/chats');
    }

    setCurrentUser(allUsers[index]);
    allSenderMessage.forEach((message) => {
      if(message.receiver.id === allUsers[index].id && message.sender.id === id) {
        messageS.push(message);
      }
      if(message.sender.id === allUsers[index].id && message.receiver.id === id) {
        messageR.push(message);
      }
    });

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

  socket.addEventListener('message', function (event) {
    const msg = JSON.parse(event.data);

    if(msg.sender === id) {
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

    if(msg.receiver === id && currentUser.id === msg.sender) {
        setRenderMessageOnsend(RenderMessageOnsend.concat(
        <li className="you">
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
  });

  return (
    <>
      {/* <ul>
        {
          allUsers.map(function(user , index)  {
            return (
              <li key={user.id} data-index={index} onClick={handleChangeCurrentUser}>
                <h2>{user.lastName}</h2>
              </li>         
            );
          })
        }
      </ul>
      <br></br><br></br> */}
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
