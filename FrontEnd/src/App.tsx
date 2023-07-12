import { useState, useEffect } from "react";
import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import HomePage from "./Pages/HomePage";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Router>
      {" "}
      {/* Add the Router component here */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} index />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <h1>{message}</h1>
      </div>
    </Router>
  );
}

export default App;
