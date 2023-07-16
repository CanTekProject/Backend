import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./chatstyles.css";

interface IHome {
  socket: any;
}

const ChatHome: React.FC<IHome> = ({ socket }) => {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState("");

  const handleNewUser = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("nickName", nickName);
    socket.emit("newUser", { nickName, socketID: socket.id });
    navigate("/Chat");
  };

  return (
    <div className="main">
      <div className="form-container">
        <h2>Enter your nickname</h2>
        <form onSubmit={handleNewUser}>
          <input
            type="text"
            className="nickname-input"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            style={{color:"black"}}
          />
          <button type="submit" className="signup-button">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatHome;
