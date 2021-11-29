import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './chatcss.css'
const jwt = require("jsonwebtoken");
var i=0 ; 

// Socket to use
const socket = new WebSocket(`ws://localhost:3000/api/chats`);

// This page is currently a example -> Have to be changed
function ChatPage() {

  const decoded_token = jwt.verify(sessionStorage.getItem('__TOKEN__'), 'tokenkey');
  const [content, setContent] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [allSenderMessage, setSenderMessage] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [id, setid] = useState("");
  const messageR = [];
  const messageS = [];
  const [RenderMessageOnclick, setRenderMessageOnclick] = useState([]);

  const [RenderMessageOnsend, setRenderMessageOnsend] = useState([]);

  const Render = () => {
    return (
 <div class="conversation" >
        {messageS.map((message) => <> 
           <li class="me" id="me">
        <div class="entete">
          <h2></h2>
          <span class="status blue"></span>
        </div>
        
        <div class="message">
        <div > {message.content}</div >
        </div>
      </li></>    )}


      {messageR.map((message) => <> 
           <li class="you"  id="you">
        <div class="entete">
          <h2></h2>
          <span class="status blue"></span>
        </div>
        
        <div class="message">
        <div > {message.content}</div >
        </div>
      </li></>    )}

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

          setid(decoded_token.user_id);
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



  const handleChangeCurrentUser = (event) => {
    event.preventDefault();
    console.log(messageR.length);
    if( i>0 ) {
      window.location.reload(false);

    }
   
    setCurrentUser(allUsers[event.target.getAttribute("data-index")]);
    allSenderMessage.map((message) => {
      if (message.receiver.id === allUsers[event.target.getAttribute("data-index")].id && message.sender.id === id) {
        messageS.push(message);
      }
      if (message.sender.id === allUsers[event.target.getAttribute("data-index")].id && message.receiver.id === id) {
        messageR.push(message);
      }

    })

   
    setRenderMessageOnclick(RenderMessageOnclick.concat(<Render key={RenderMessageOnclick.length} />));
    i++ ; 
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

    if (msg.sender === id) {
      setRenderMessageOnsend(RenderMessageOnsend.concat(  <> <li class="me" >
      <div class="entete">
        <h2></h2>
        <span class="status blue"></span>
      </div>
    
      <div class="message">
      <div > {msg.content}</div >
      </div>
    </li> </>)); 
    i++ ;  
  }
    if (msg.receiver === id && currentUser.id === msg.sender) {
      setRenderMessageOnsend(RenderMessageOnsend.concat(  <li class="you"  >
      <div class="entete">
        <h2></h2>
        <span class="status blue"></span>
      </div>
      
      <div class="message">
      <div > {msg.content}</div >
      </div>
    </li>));
   i++ ;   
  }



  });

  return (
    <>

    

    
      <ul>
        {
          
          allUsers.map(function(user , index)  {
            return ( <li key={user.id} data-index={index} onClick={handleChangeCurrentUser}  > <h2>{user.lastName} </h2> </li>
         
            );

          })
        }
      </ul>
      

      <br></br><br></br>
     
      
     
      <div id="container">
  <aside>
    <header>
      
    </header>
    <ul>
      {
          allUsers.map(function(user , index) {
            return ( <li key={user.id} data-index={index}  onClick={handleChangeCurrentUser}> <h2>{user.lastName} </h2>   <h3>
              <span class="status orange"></span>
              offline
            </h3></li>
          
            );

          } , this)
        }
    </ul>
  </aside>
  <main>
    <header>
      <div>
      
      </div>
    </header>
    <ul id="chat">
    
    {RenderMessageOnclick }
 
   
     
     
    {RenderMessageOnsend}
    
    </ul>
    
    <footer>
      <textarea placeholder="Type your message" onChange={handleChange}></textarea>
      
      <a onClick={sendMessage}   href="#">Send</a>
    </footer>
  </main>
</div>


    </>
  );
}

export default ChatPage;
