import { useRef, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import ChatTyping from "./ChatTyping";
import Room from "./Room";

interface ChatProps {
  socket: any;
}

const Chat = ({ socket } : ChatProps) => {
  const lastMessageRef = useRef<null | HTMLElement>(null);
  const [messages, setMessages] = useState<any>([]);
  const [typingStatus, setTypingStatus] = useState("");
  const [room, setRoom] = useState(0);

  const switchRoom = (roomNumber: number) => {
    if (roomNumber === 0) {
      setRoom(0);
    } else if (roomNumber === 1) {
      setRoom(1);
    } else if (roomNumber === 2) {
      setRoom(2);
    }
  };

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/chat/messages?roomID=${room}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();

        if (response.ok) {
          setMessages(data.messages);
        } else {
          console.log("Error fetching messages:", data.message);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    loadMessages();
  }, [room]);

  useEffect(() => {
    socket.on("typingResponse", (data: any) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, room]);

  return (
    <div className="mt-2 main">
      <div className="flex flex-col justify-center items-center content-center   bg-[#F9F9F9]">
        <Room switchRoom={switchRoom} room={room} />
      </div>
      <div className="flex flex-col justify-center items-center content-center bg-[#F9F9F9]  ">
        <ChatHeader socket={socket} />
      </div>
      <div className="flex  justify-center items-center content-center bg-[#F9F9F9]  ">
        <ChatBody lastMessageRef={lastMessageRef} messages={messages} />
      </div>
      <div className="flex justify-center items-center content-center bg-[#F9F9F9]">
        <ChatTyping typingStatus={typingStatus} />
      </div>
      <div className="flex  justify-center items-center content-center bg-[#F9F9F9]  ">
        <ChatFooter socket={socket} room={room} />
      </div>
    </div>
  );
};

export default Chat;
