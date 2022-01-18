import React from 'react'
import { useState } from 'react'

export default function AddChat({handleChat}) {
    const [newChats, setNewChats] = useState('');

     const handleChange =(e)=>{
        e.preventDefault();
       setNewChats(e.target.value)
     }

     const handleSave=(e)=>{
        if (newChats.length > 0){
            handleChat(newChats)
            setNewChats('');
         }
        }

    return (
        <div  className='chat-form'>
            <input placeholder='type something...' onChange={handleChange} value={newChats}></input>
            <button onClick={handleSave}>send</button>
        </div>
    )
}

