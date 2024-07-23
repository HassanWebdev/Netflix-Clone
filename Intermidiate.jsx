import React from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import "./Container.css";
import img2 from "./images/feature-3.png";
import img1 from "./images/feature-2.png";
import img3 from "./images/feature-4.png";
function Intermidiate() {
  return (
    <div className="main2">
      <Container className="Container" fluid>
        <Row className="Row1">
          <Col className="col-5">
            <h1 id="hs">Enjoy on your TV</h1>
            <h4 id="ha">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h4>
          </Col>
          <Col className="col-7">
            <img id="feature" src={img2} alt="" />
          </Col>
          <hr className="hr" />
        </Row>
        <Row className="Row2">
          <Col id="col1" className="col-7">
            <img id="features2" src={img1} alt="" />
          </Col>
          <Col id="col2" className="col-5">
            <h1 id="hs">Download your shows to watch offline</h1>
            <h4 id="ha">
              Save your favorites easily and always have something to watch.
            </h4>
          </Col>
          <hr className="hr" />
        </Row>
        <Row>
          <Col id="col3" className="col-5">
            <h1 id="hs">
              Watch <br /> everywhere
            </h1>
            <h4 id="ha">
              Stream unlimited movies and TV <br /> shows on your phone, tablet,
              laptop, <br /> and TV
            </h4>
          </Col>
          <hr className="hr" />
        </Row>
        <Row>
          <Col id="col4" className="col-6">
            <img id="features3" src={img3} alt="" />
          </Col>
          <Col id="col5" className="col-6">
            <h1 id="hs">
              Create profiles for <br /> kids
            </h1>
            <h4 id="ha">
              Send kids on adventures with their favorite <br /> characters in a
              space made just for them— <br /> free with your membership
            </h4>
          </Col>
          <hr className="hr" />
        </Row>
        <Row>
          <Col id="col12" className="col-12">
            <h1 id="hs">Frequently Asked Questions</h1>
          </Col>
          <Col>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3>What is Netflix</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <h3>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, <br /> movies, anime, documentaries,
                    and more on thousands of internet-connected <br /> devices.{" "}
                  </h3>
                  <h4>
                    <br /> You can watch as much as you want, whenever you want
                    without a single commercial <br /> – all for one low monthly
                    price. There's always something new to discover and new TV{" "}
                    <br /> shows and movies are added every week!
                  </h4>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  <h3>How much does Netflix cost?</h3>{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <h4>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all <br /> for one fixed monthly fee.
                    Plans range from Rs250 to Rs1,100 a month. No extra <br />{" "}
                    costs, no contracts.{" "}
                  </h4>{" "}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h3>Where can I watch?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <h4>
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the <br /> web at netflix.com from
                    your personal computer or on any internet-connected device{" "}
                    <br /> that offers the Netflix app, including smart TVs,
                    smartphones, tablets, streaming <br /> media players and
                    game consoles.
                  </h4>
                  <h4>
                    {" "}
                    <br /> You can also download your favorite shows with the
                    iOS, Android, or Windows 10 <br /> app. Use downloads to
                    watch while you're on the go and without an internet <br />{" "}
                    connection. Take Netflix with you anywhere.
                  </h4>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-12">
            <input type="text" placeholder="Email address" />
            <Button className="btn-lg" href="/" id="btn2" type="submit">
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intermidiate;
