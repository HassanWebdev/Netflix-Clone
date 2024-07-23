import { useState } from "react";
import "./Sign.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Button, Form } from "react-bootstrap";
import imgj from "./images/logo.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const auth = getAuth(app);

function SignInPage() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handle = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("login");
        navigate("/MainCom");
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <Container className="page " fluid   >
      <ToastContainer />
      <img id="logoo" src={imgj} alt="" />
      <Row id="row">
        <div id="box" className="col-xl-4 col-md-8 ">
          <div id="content">
            <h4 style={{ fontSize: "35px" }}>Sign In</h4>
            <br />
            <Form.Control
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
              onKeyDown={(e)=>{
                if(e.key=='Enter'){
                  handle(email,password)
                }
                else return null
              }}
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
              <h4>Sign In</h4>
            </Button>
            <p id="p">
              {" "}
              Don,t have Account{" "}
              <Link id="li" to="/SignUp">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
}
export default SignInPage;