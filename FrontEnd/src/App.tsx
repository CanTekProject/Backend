import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/SignupPage";
import Forum from "./Pages/Forum";
import Footer from "./Components/footer";
import About from "./Pages/About";
import Privacy from "./Pages/Privacy";
import ContactUs from "./Pages/ContactUs";
import ChatHome from "./Components/ChatHome";
import Chat from "./Components/Chat";
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_SOCKET_URL_SERVER);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Home" element={<HomePage />} />
          <Route
            path="/Login"
            element={<LoginPage handleLogin={handleLogin} />}
          />
          <Route
            path="/ChatHome"
            element={<ChatHome socket={socket} />}
          />
          <Route path="/Chat" element={<Chat socket={socket} />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
