import logo from "./images/logo.png";
import "./Navbar.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Intermidiate from "./Intermidiate";

function Navbar() {
  return (
    <div className="Full">
      <div className="main">
        <div className="Navbar">
          <Link to="/">
            <img id="logo" src={logo} alt="Logo" />
          </Link>
          <Link to="/Signin">
            <Button id="btn">Sign In</Button>{" "}
          </Link>
          
        </div>
        <div className="Text">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h4 id="h4">Watch anywhere. Cancel anytime.</h4>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <input type="text" placeholder="Email address" />
          <Link to="/Signin">
            <Button className="btn-lg" id="btn2" type="submit">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      <Intermidiate />
    </div>
  );
}

export default Navbar;
