import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificateCard";
import Particle from "../Particle";
import certi1 from "../../Assets/certificate/certi1.png";
import certi2 from "../../Assets/certificate/certi2.png";
import certi3 from "../../Assets/certificate/certi3.png";


function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Certifications and <strong className="purple">Licenses</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my all Certifications and Achievements
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certi1}
              isBlog={false}
              title="Azure Fundementals"
              company="Microsoft"
              date="May, 2023"
              cerLink="https://drive.google.com/file/d/1aBTmJYgeLZJ0kxBBAr-S7aXJJ6TdZt87/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certi2}
              isBlog={false}
              title="Introduction to Github Adminstration"
              company="Microsoft"
              date="May, 2023"
              cerLink="https://drive.google.com/file/d/1a0pYU0UqCAIMn3nLYP2k0g1XSS0xKjDg/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certi3}
              isBlog={false}
              title="Perform searching re-ranking with semantic ranking in Azure AI search"
              company="Micrpsoft"
              date="Mar 23"
              cerLink="https://drive.google.com/file/d/1W7E6bQ_ONS8yjzLKjzqD4Nn0sssEb4mo/view?usp=sharing"
            />
          </Col>

          
          </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
