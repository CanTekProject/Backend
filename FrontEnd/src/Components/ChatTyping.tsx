import React from 'react'

interface IChatTyping {
    typingStatus: any;
}

export default function ChatTyping({ typingStatus}: IChatTyping) {
  return (
    <div className='flex justify-between items-center border-2 w-4/12 bg-[#E6EAEA] p-2'>
        <span className='text-xs italic'>{typingStatus}</span>
    </div>
  )
}
