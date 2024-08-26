import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particles from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/profile.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container  fluid className="about-section">
      
      <Particles/>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.4em", paddingBottom: "20px" }}>
              Know Who <strong className="green">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} style={{ maxHeight: "700px",opacity:0.8,filter: "opacity(1)",transition: "opacity 0.3s ease", borderRadius: "2000000000px" }} className="img-style" alt="Profile" />
            <style>
        {`
          .img-style:hover {
            
            transition: opacity 0.3s ease;
            cursor: pointer;
            filter: opacity(1);
            transform: scale(1.1);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            
          }
        `}
      </style>

          
           
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="green">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="green">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
        </Container>  
    </Container>
  );
}

export default About;
