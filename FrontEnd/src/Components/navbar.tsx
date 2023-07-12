import "./navbar.css";

function Navbar() {
  return (
    <nav className="navClass">
      <div className="divClass">
        <img
          src="./logo.ico.png"
          alt="RR Systems"
          style={{ height: "50px", width: "auto" }}
        />
        <a className="pages" href="/Home">
          Home
        </a>
        <a className="pages" href="/Login">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
