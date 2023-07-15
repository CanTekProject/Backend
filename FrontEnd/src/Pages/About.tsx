import "../../assets/scss/partials/_About.scss";
import APPEALIELogo from "../../assets/images/APPEALIE_Logo.png";
import RemoteTechAwardsLogo from "../../assets/images/Award.png";
import WebbyLogo from "../../assets/images/logo.svg";

function About() {
  return (
    <div className="aboutPage about-me-container">
      <h2>Who We Are</h2>
      <p>
        Empowering the world to develop technology through collective knowledge.
        Our public platform serves 100 million people every month, making it one
        of the most popular websites in the world.
      </p>
      <p>
        Our asynchronous knowledge management and collaboration offering, Chat
        Overflow for Teams, is transforming how people work.
      </p>
      <ul>
        <p>100+ million: Monthly visitors to our network</p>
        <p>21+ million: Questions asked to-date</p>
        <p>13.6 seconds: Average time between new questions</p>
        <p>50.6+ billion: Times a developer got help</p>
        <p>10,000+: Customer companies for all products</p>
      </ul>

      <hr style={{ margin: "20px", color: "white" }}></hr>

      <h2>Chat Overflow</h2>
      <p>
        Chat Overflow helps developers just like yourself find the answers they
        need, when they need them.
      </p>
      <p>
        We're best known for our public Q&A platform that over 100 million
        people visit every month to ask questions, learn, and share technical
        knowledge.
      </p>
      <p>
        Our products and tools empower people to find what they need to develop
        technology at work or at home.
      </p>
      <p>
        These products include Chat Overflow for Teams, Chat Overflow
        Advertising, Collectives™ on Chat Overflow, and Chat Overflow Talent.
      </p>

      <hr style={{ margin: "20px", color: "white" }}></hr>

      <h2>Awards and Recognition</h2>
      <ul>
        <p>
          <a
            href="https://appealie.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={APPEALIELogo}
              style={{ height: "50px", width: "200px" }}
              alt="APPEALIE SaaS Awards"
            />
          </a>
          APPEALIE SaaS Awards - Collaboration + Productivity (2023)
        </p>
        <p>
          <a
            href="https://www.tech4goodawards.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={RemoteTechAwardsLogo}
              style={{ height: "80px", width: "80px" }}
              alt="RemoteTech Awards"
            />
          </a>
          Tech4Good Awards - Developer Collaboration Platform (2023)
        </p>
        <p>
          <a
            href="https://www.webbyawards.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={WebbyLogo}
              style={{ height: "100px", width: "100px" }}
              alt="Webby"
            />
          </a>
          Webby - The Best of the Internet (2023)
        </p>
      </ul>

      <hr style={{ margin: "20px", color: "white" }}></hr>

      <h2>Our Products</h2>
      <ul>
        <p>
          Our Public Platform: Where developers and technologists go to gain and
          share knowledge.
        </p>
        <p>
          Chat Overflow for Teams: Where developers and technologists share
          private knowledge with coworkers.
        </p>
        <p>
          Chat Overflow Advertising: Where companies build their employer brand
          to attract top tech talent.
        </p>
        <p>
          Collectives™ on Chat Overflow: Where companies reach the world’s
          largest audience of developers and technologists.
        </p>
        <p>
          Chat Overflow Talent: Where developer communities connect with the
          specific technologies they use the most.
        </p>
      </ul>

      <hr style={{ margin: "20px", color: "white" }}></hr>

      <h2>Our Core Values</h2>
      <ul>
        <p>Adopt a customer-first mindset</p>
        <p>Be flexible and inclusive</p>
        <p>Be transparent</p>
        <p>Empower people to deliver outstanding results</p>
        <p>Keep community at our center</p>
        <p>Learn, share, grow</p>
      </ul>
    </div>
  );
}

export default About;
