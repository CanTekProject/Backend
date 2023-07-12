import { useState, useEffect } from "react";
import "./App.css";
import Login from "./Pages/Login";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <Login />
      <h1>{message}</h1>
    </div>
  );
}

export default App;
