import React, { useEffect, useState } from 'react'

interface IRoom {
    room: any;
    switchRoom(number: any): any
}

export default function Room({ room, switchRoom }: IRoom) {
    
  
        

    useEffect(() => {
        console.log(room)
    },[room])

  return (
    <div className='flex gap-4'>
        <button className='p-2 text-white bg-black rounded' onClick={() => switchRoom(1)}>General</button>
        <button className='p-2 text-white bg-black rounded' onClick={() => switchRoom(2)}>Room 1</button>
        <button className='p-2 text-white bg-black rounded' onClick={() => switchRoom(3)} >Room 2</button>
    </div>
  )
}
