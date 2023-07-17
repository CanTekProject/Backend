import { useNavigate } from "react-router-dom";
import "./ForumPage.css";

const ForumPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Login");
  };

  return (
    <div style={{ color: "white" }} className="main">
      <body>
        <h1>Explore the Vibrant Forum Community</h1>
        <p>
          Our forum provides a platform for engaging discussions,
          knowledge-sharing, and problem-solving. Get involved with like-minded
          individuals and tap into a vast pool of expertise.
        </p>
        <p>
          Take a look at some of the exciting features and screenshots of our
          forum:
        </p>

        <div className="animation-container">
          <img
            src="../../public/thumb.jpg"
            alt="Thumbs Up"
            className="animated-element"
          />
        </div>

        <div className="screenshot-container">
          <img
            src="../../public/Forum.png"
            alt="Forum Screenshot"
            className="screenshot-img"
          />
        </div>

        <p className="highlight">
          Join our forum community today and be a part of the knowledge
          exchange!
        </p>

        <div className="button-section">
          <button
            type="button"
            className="btn btn-custom"
            onClick={handleButtonClick}
            style={{ marginBottom: "20px" }}
          >
            Login
          </button>
        </div>
      </body>
    </div>
  );
};

export default ForumPage;
