import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface SignupForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const AlertMessage: React.FC<{ message: string; className?: string }> = ({
  message,
  className,
}) => {
  const alertStyle = {
    backgroundColor: className === "alert-danger" ? "red" : "green",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "10px",
    color: "white",
    fontWeight: "bold",
  };

  return <div style={alertStyle}>{message}</div>;
};

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState<SignupForm>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertClassName, setAlertClassName] = useState<string>("");

  useEffect(() => {
    if (alertClassName === "alert-success") {
      const timer = setTimeout(() => {
        navigate("/Login");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alertClassName, navigate]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Check if any required field is empty
    if (
      !signupForm.username ||
      !signupForm.email ||
      !signupForm.password ||
      !signupForm.confirmPassword
    ) {
      setAlertMessage("Please fill in all the required fields");
      setAlertClassName("alert-danger");
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      setAlertMessage("Passwords do not match");
      setAlertClassName("alert-danger");
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
        setAlertMessage("Registration successful");
        setAlertClassName("alert-success");
        setSignupForm({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        const data = await response.json();
        const errorMessage = data.message || "Registration failed";
        setAlertMessage(errorMessage);
        setAlertClassName("alert-danger");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setAlertMessage("An error occurred during signup");
      setAlertClassName("alert-danger");
    }
  };

  return (
    <div style={{ color: "white", padding: "70px" }}>
      <h2>Signup Page</h2>
      {alertMessage && (
        <AlertMessage message={alertMessage} className={alertClassName} />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={signupForm.username}
            onChange={handleInputChange}
            style={{ color: "black" }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signupForm.email}
            onChange={handleInputChange}
            style={{ color: "black" }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={signupForm.password}
            onChange={handleInputChange}
            style={{ color: "black" }}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={signupForm.confirmPassword}
            onChange={handleInputChange}
            style={{ color: "black" }}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <hr style={{ margin: "20px", color: "white" }}></hr>
      <div>
        <p>Already have an account?</p>
        <Link to="/Login" className="registerLink">
          <p>Click here to Login</p>
        </Link>
      </div>
    </div>
  );
};
export default SignupPage;
