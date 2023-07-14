import React, { useState } from "react";

interface SignupForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupPage: React.FC = () => {
  const [signupForm, setSignupForm] = useState<SignupForm>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupForm),
      });

      if (response.ok) {
        // Registration successful
        alert("Registration successful");
      } else {
        // Registration failed
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup");
    }
  };

  return (
    <div style={{ color: "white" }}>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={signupForm.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signupForm.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={signupForm.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={signupForm.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <hr style={{ margin: "20px", color: "white" }}></hr>
      <div>
        <p>Already have an account?</p>
        <a href="/Login" className="registerLink">
          <p>Click here to Login</p>
        </a>
      </div>
    </div>
  );
};

export default SignupPage;
