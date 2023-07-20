import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";
//import ChatOverFlowLogo from "../../assets/images/ChatOverFlowLogo.svg";
//import Profile from "../Pages/Profile";

interface NavbarProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
  userName: string;
}

const hoverStyles = `
  background-color: #5a4b62;
  transition: background-color 0.3s ease;
`;

const StyledNav = styled.nav`
  display: flex;
  margin-top: -50px;
  align-items: center;
  justify-content: space-between;
  background-color: #42344b;
  color: white;
  padding: 1rem;
`;

const LeftNavItems = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 10rem;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:hover {
    ${hoverStyles}
  }
`;

const MiddleNavItem = styled.div`
  flex-grow: 1;
  text-align: center;

  img {
    max-height: 50px;
  }
`;

const RightNavItems = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6rem;
`;

// Update the styles of the StyledDropdownButton
const StyledDropdownButton = styled(DropdownButton)`
  /* Add any additional styles for the DropdownButton here */
  position: relative;
  padding: 0.5rem 1rem;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center; /* Align items in the middle */

  &:hover {
    ${hoverStyles}
  }
`;

const StyledDropdownButtonText = styled.span`
  margin-right: 12px;
`;

const StyledDropdownMenu = styled.div`
  margin-top: 15px;
  padding-top: 10px; /* Add some padding to the top to move the items down */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a box-shadow */
  background-color: #42344b; /* Set the background color */
`;

// Create a new styled component for the dropdown items that looks like a menu list
const StyledMenuListItem = styled(Dropdown.Item)`
  display: block;
  padding: 0.5rem 1rem;
  color: #ffffff;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    ${hoverStyles}
  }
`;

// Create a pseudo-element (::before) for the arrow on the dropdown button
const DropdownButtonArrow = styled.span`
  position: absolute;
  top: calc(50% - 4px);
  right: 15px;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 8px 0 8px;
  border-color: white transparent transparent transparent;
`;

const StyledChatNavLink = styled.a`
  margin-right: 0.5rem;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: #755d78; /* Set the background color to match the button color */
  border-radius: 4px; /* Add border-radius to match the button style */

  &:hover {
    ${hoverStyles}
  }
`;

const StyledForumNavLink = styled.a`
  margin-right: 10rem;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: #755d78; /* Set the background color to match the button color */
  border-radius: 4px; /* Add border-radius to match the button style */

  &:hover {
    ${hoverStyles}
  }
`;

const Navbar: React.FC<NavbarProps> = ({
  isLoggedIn,
  handleLogout,
  userName,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logout = () => {
    handleLogout();
  };

  return (
    <StyledNav className="navClass">
      <LeftNavItems>
        <StyledForumNavLink className="pages" href="/ForumPage">
          Forum
        </StyledForumNavLink>
        {isLoggedIn && (
          <StyledChatNavLink className="pages" href="/ChatHome">
            Chat
          </StyledChatNavLink>
        )}
      </LeftNavItems>

      <MiddleNavItem>
        <NavLink className="pages" to="/Home">
          <img
            src="./logo.ico.png"
            alt="RR Systems"
            style={{ height: "50px", width: "auto" }}
          />
        </NavLink>
      </MiddleNavItem>

      <RightNavItems>
        {!isLoggedIn ? (
          <>
            <StyledNavLink className="pages" to="/Login">
              Login
            </StyledNavLink>
          </>
        ) : (
          <>
            <StyledDropdownButton
              id="profile-dropdown"
              title={
                <>
                  <StyledDropdownButtonText>
                    {/* <img
                      src={ChatOverFlowLogo}
                      style={{
                        width: 30,
                        height: 20,
                        marginRight: 5,
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      alt={userName}
                    /> */}
                    {"Profile"}
                  </StyledDropdownButtonText>
                  <DropdownButtonArrow /> {/* Add the arrow */}
                </>
              }
              onClick={toggleDropdown}
            >
              {dropdownOpen && (
                <StyledDropdownMenu>
                  {/* Change the StyledDropdownItem to StyledMenuListItem */}
                  <StyledMenuListItem as={NavLink} to="/Profile">
                    Profile
                  </StyledMenuListItem>
                  <Dropdown.Divider />
                  {/* Change the StyledMenuListItem to StyledMenuListItem */}
                  <StyledMenuListItem
                    onClick={logout}
                    className="pages"
                    href="/Home"
                  >
                    Logout
                  </StyledMenuListItem>
                </StyledDropdownMenu>
              )}
            </StyledDropdownButton>
          </>
        )}
      </RightNavItems>
    </StyledNav>
  );
};

export default Navbar;
