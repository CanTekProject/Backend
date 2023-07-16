import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

interface NavbarProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, handleLogout }) => {
  const logout = () => {
    handleLogout();
  };

  return (
    <nav className="navClass">
      <div className="divClass">
        <NavLink className="pages" to="/Forum">
          Forum
        </NavLink>
        {isLoggedIn && (
          <NavLink className="pages" to="/ChatHome">
            Chat
          </NavLink>
        )}
        <NavLink className="pages" to="/Home">
          <img
            src="./logo.ico.png"
            alt="RR Systems"
            style={{ height: "50px", width: "auto" }}
          />
        </NavLink>

        {!isLoggedIn ? (
          <NavLink className="pages" to="/Login">
            Login
          </NavLink>
        ) : (
          <a className="pages" href="#" onClick={logout}>
            Logout
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
