import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram, AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: "2.6em"}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I solve complex backend challenges with elegant, scalable solutions.
              <br />
              <br />Fluent in
              <i>
                <b className="purple"> Java, Spring Boot, Hibernate, and REST APIs. </b>
              </i>
              <br />
              <br />
              I engineer robust systems in FinTech—like
              <i>
                <b className="purple"> Payment Aggregators, Agency Banking,</b> and <b className="purple">SMS VAS Servers</b>.
              </i>
              <br />
              <br />
              I thrive in
              <b className="purple"> cloud-native environments</b>, using tools like
              <b className="purple"> Docker, Kubernetes, Jenkins,</b> and
              <i>
                <b className="purple"> Angular</b>
              </i>
              &nbsp;while applying
              <i>
                <b className="purple"> clean architecture, design patterns, and concurrency </b>
              </i>
               to craft maintainable, high-performance systems.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="https://github.com/sunilpoudel123"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sunilpoudel/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/sunilpoudel123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
