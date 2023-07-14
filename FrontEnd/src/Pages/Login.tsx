import React, { useState } from "react";
import "./Login.css";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      });

      const data = await response.json();

      if (data.status === "ok") {
        // Display success message
        alert("Login successful!");
        window.location.href = "/Home"; // Redirect to the home page after successful login
      } else {
        // Display error message
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      // Handle network or server errors
      console.error("Error occurred:", error);
      alert("An error occurred during login");
    }
  };

  return (
    <div style={{ color: "white" }}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <hr style={{ margin: "20px", color: "white" }}></hr>
      <div>
        <p>Don't have an account?</p>
        <a href="/Signup" className="registerLink">
          <p>Click here to register</p>
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
