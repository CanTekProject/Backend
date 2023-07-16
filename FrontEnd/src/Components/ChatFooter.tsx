import React, { useState } from 'react'

interface IChatFooter {
    socket: any;
    room: number
  }

export default function ChatFooter({ socket, room }: IChatFooter) {
  const [message, setMessage] = useState('')

  function handleSendMessage(e: any) {
    e.preventDefault()

    if (message.trim( ) && localStorage.getItem("nickName")) {
      socket.emit('message', {
        text: message,
        nickName: localStorage.getItem('nickName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        roomID: room
      })
    }
    setMessage('')
  }

  function handleTyping() {
    socket.emit('typing', `${localStorage.getItem('userName')} is typing`);
  }

  return (
    <div className='flex items-center justify-between w-4/12 p-2 bg-white border-2'>
        <input placeholder='Write the message' value={message}  onKeyDown={handleTyping}  onChange={(e) => setMessage(e.target.value)} style={{color:"black"}}/>
        <button className='bg-[#32455A] text-white p-1' onClick={handleSendMessage}>Submit</button>
    </div>
  )
}
