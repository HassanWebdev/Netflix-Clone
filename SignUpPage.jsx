import { useState } from "react";
import "./Sign.css";
import { Link } from "react-router-dom";
import { Container, Row, Button, Form } from "react-bootstrap";
import imgj from "./images/logo.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const auth = getAuth(app);

function SignUpPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handle = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Succes");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <Container className="page" fluid>
      <ToastContainer />
      <img id="logoo" src={imgj} alt="" />
      <Row id="row">
        <div id="box" className="col-xl-4 col-md-8 ">
          <div id="content">
            <h4 style={{ fontSize: "35px" }}>Sign up</h4>
            <br />
            <Form.Control
              autoFocus
              onChange={(e) => setemail(e.target.value)}
              id="Form1"
              type="text"
              placeholder="Email or number"
            />
            
            <br />
            <Form.Control
              onChange={(e) => setpassword(e.target.value)}
              id="Form2"
              type="password"
              placeholder="Password"
            />
            
            <br />
            <br />
            <Button
              type="sumbit"
              onClick={() => handle(email, password)}
              id="sign"
              className="col-xl-12 col-md-12 col-sm-12 col-xm-12"
              size="xl"
            >
              {" "}
              <h4>Sign Up</h4>
            </Button>
            <p id="p">
              {" "}
              Already have Account{" "}
              <Link id="li" to="/SignIn">
                Sign In
              </Link>{" "}
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default SignUpPage;
