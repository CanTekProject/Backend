import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IChatHeader {
  socket: any;
}

export default function ChatHeader({ socket }: IChatHeader) {
  const navigate = useNavigate();
  const [nickName, setNickname] = useState("")

  useEffect(()=> {
    const nick_name = localStorage.getItem("nickName") || ""
    setNickname(nick_name)
  })

  function leaveChat(e: any) {
    e.preventDefault();

    socket.emit("leaveChat");
    localStorage.removeItem("nickName")
    setNickname("")
    navigate("/");
    window.location.reload();
  }

  return (
    <div className="flex justify-between items-center border-2 w-4/12 bg-white p-2">
      <span className="px-1 text-gray-500">{nickName}</span>
      <button
        className="bg-cyan-800 hover:bg-cyan-900 rounded p-1 text-white"
        onClick={leaveChat}
      >
        SIGN UP
      </button>
    </div>
  );
}
