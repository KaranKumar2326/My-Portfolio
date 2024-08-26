import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {/* Hi Everyone  */}
              {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
            </span> */}
              {/* &nbsp; */}

              
              <br />
              <ImPointRight /> I am currently pursuing a Bachelors of Technology in Information Technology from Guru Gobind Singh Indraprastha University
              
              <br />
              <br />  
              <ImPointRight /> I have honed my skills in
              <b className="purple"> Full Stack development, AI & ML, CyberSecurity, and Problem Solving. </b>
              <br />
              <br />

              <ImPointRight /> My professional experiences includes &nbsp;
              
              <ul><b className="purple">--  Security Analyst Intern </b> at <b className="purple">Securis360 Inc., </b></ul>
              
              <ul><b className="purple">
                --  Junior Associate Software Developer</b> and <b className="purple">  Web Developer Intern </b>at <b className="purple"> Calanjiyam Consultancies and Technologies, </b></ul>
              <br /> 
              <ImPointRight /> I have equipped me with a solid foundation to tackle challenges and
              deliver impactful results.
              <br />
              <br />
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            
            <iframe
                  src="https://giphy.com/embed/L5jXcnbp2dkZi"
                  width="100%"
                  height="450"
                  // add frame border
                  
                  className="giphy-embed"
                  allowFullScreen
                  title="GIF"
              ></iframe>
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
                  href="https://github.com/KaranKumar2326"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Karan7107"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/karankumar7107/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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