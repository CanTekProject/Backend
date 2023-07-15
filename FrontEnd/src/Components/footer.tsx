import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

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
          <a href="/privacy" className="footerLink">
            Privacy
          </a>
          <a href="/about" className="footerLink">
            About
          </a>
          <a href="/policies" className="footerLink">
            Policies
          </a>
        </div>
        <div className="socialMediaSection">
          <a href="https://www.facebook.com" className="socialIcon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com" className="socialIcon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.github.com" className="socialIcon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.discord.com" className="socialIcon">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
