import ChatForumShowCase from "../../assets/images/ChatForumShowCase.png";
import ChatOverFlowLogo from "../../assets/images/ChatOverFlowLogo.svg";
import StackOverFlowLogo from "../../assets/images/StackOverFlowLogo.png";
import "../../assets/scss/partials/_home.scss"; // Import the SCSS file
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Signup");
  };

  return (
    <div>
      <div className="home-container">
        <div className="title-section">
          <div>
            <h2 className="title">What if</h2>
            <h2 className="title">StackOverflow</h2>
            <h2 className="title">was also a</h2>
            <h2 className="title">chatroom</h2>
            <div className="logo-container">
              <img src={StackOverFlowLogo} className="logo" alt=""></img>
            </div>
          </div>
          <div className="image-section">
            <img src={ChatOverFlowLogo} className="image" alt=""></img>
          </div>
        </div>

        <div className="description-section">
          <div className="empty-column"></div>
          <div className="text-column">
            <h2 className="description">
              Instantly access accurate answers from our vibrant community
              chatroom and make swift progress on your project today!
            </h2>
          </div>
        </div>
        <div className="showcase-section">
          <div className="image-column">
            <img
              src={ChatForumShowCase}
              className="showcase-image"
              alt=""
            ></img>
          </div>
        </div>
        <h2 className="additional-description">
          Supercharge your problem-solving potential with the
          <br></br>
          ultimate fusion of StackOverflow and real-time chat. Say goodbye
          <br></br> to endless waiting and hello to instant, accurate<br></br>{" "}
          answers from community. Take your projects<br></br> to new heights
          with swift progress and unparalleled
          <br></br> collaboration.
        </h2>
        <br />
        <h2 className="join-us-description">
          Your project deserves the best – Join us now!
        </h2>
        <div className="button-section">
          <button
            type="button"
            className="btn btn-custom"
            onClick={handleButtonClick}
            style={{ marginBottom: "20px" }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
