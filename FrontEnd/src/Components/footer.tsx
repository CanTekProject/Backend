import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerClass">
      <div className="footerContent">
        <div className="logoSection">
          <img
            src="./logo.ico.png"
            alt="RR Systems"
            style={{ height: "50px", width: "auto" }}
          />
        </div>
        <div className="companySection">
          <p>ChatOverflow &copy; 2023</p>
        </div>
        <div className="linksSection">
          <NavLink className="footerLink" to="/Privacy">
            Privacy
          </NavLink>
          <NavLink className="footerLink" to="/About">
            About
          </NavLink>
          <NavLink className="footerLink" to="/ContactUs">
            ContactUs
          </NavLink>
        </div>

        <div className="socialMediaSection">
          <a
            href="https://www.facebook.com"
            className="socialIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com"
            className="socialIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://github.com/CanTekProject"
            className="socialIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.discord.com"
            className="socialIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
