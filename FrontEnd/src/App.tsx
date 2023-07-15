import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/SignupPage";
import Forum from "./Pages/Forum";
import Footer from "./Components/footer";

function App() {
  /* Check server connection response  */
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
