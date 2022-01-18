import Form from "./forms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from './chat'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

function App() {
const [chats, setChats] = useState([]);

useEffect(() =>{
  const sentChat = JSON.parse(localStorage.getItem('react-chat-data'));
  if(sentChat){
    setChats(sentChat)
  }
},[])

  useEffect(() =>{
    localStorage.setItem('react-chat-data', JSON.stringify(chats));
  },[chats])

const addChat =(text)=>{
  const newChat ={
    id:nanoid(),
    text:text
  }
const newchats = [...chats, newChat]
setChats(newchats);
}

  return (
     <div className="App">
     <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Form/>} />
     <Route path="/chat" element={<Chat chats={chats} handleaddChat={addChat}/>} />
     </Routes>
    </BrowserRouter> 
     
     </div>
  );
}
export default App;


  
  
