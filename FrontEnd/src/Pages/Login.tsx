import React, { useState } from "react";
import "./Login.css";

interface LoginForm {
  userName: string;
  email: string;
  password: string;
}

const LoginPage = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    userName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Perform login logic using the loginForm state
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName: </label>
          <input
            type="userName"
            name="userName"
            value={loginForm.userName}
            onChange={handleInputChange}
          />
        </div>
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
    </div>
  );
};

export default LoginPage;
