import React from 'react'
import Chats from './chats'
import AddChat from './addChat'
import Header from './header'

export default function Chat({chats, handleaddChat}) {
    return (
        <div className='chat-body'>
            <Header/>
            {
            chats.map((chat) => <Chats key={chat.id} id={chat.id}
             text={chat.text}/>) 
             }
            <AddChat handleChat={handleaddChat}/>
        </div>
    )
}
