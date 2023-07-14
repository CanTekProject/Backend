import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/checkAuth", {
          credentials: "include",
        });
        const data = await response.json();

        if (response.ok) {
          setIsLoggedIn(data.status === "ok");
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/logout", {
        credentials: "include",
      });
      if (response.ok) {
        setIsLoggedIn(false);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    // Update navbar links after login status changes
    const updateNavbarLinks = () => {
      if (isLoggedIn) {
        setIsLoading(true);
        navigate("/");
        setIsLoading(false);
      }
    };

    updateNavbarLinks();
  }, [isLoggedIn, navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <nav className="navClass">
      <div className="divClass">
        <a className="pages" href="#Forum">
          Forum
        </a>
        <a className="pages" href="#Chat">
          Chat
        </a>
        <NavLink className="pages" to="/Home">
          <img
            src="./logo.ico.png"
            alt="RR Systems"
            style={{ height: "50px", width: "auto" }}
          />
        </NavLink>

        {!isLoggedIn ? (
          <>
            <NavLink className="pages" to="/Login">
              Login
            </NavLink>
          </>
        ) : (
          <a className="pages" href="#" onClick={handleLogout}>
            Logout
          </a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
