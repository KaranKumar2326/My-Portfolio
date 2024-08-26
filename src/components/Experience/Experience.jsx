import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ExperienceCards";
import Particle from "../Particle";
import securis from "../../Assets/Securis.png";
import calan from "../../Assets/Calan.png";
import csr from "../../Assets/csrbox_logo.png"
// import squareboat from "../../Assets/Experience/squareboat.png";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my all interships I have done.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={securis}
              isBlog={false}
              title="Securis360 Inc. - Onsite Internship"
              post="Security Analyst Intern"
              date="June, 2024 - August 2024"
              location="Ahmedabad, India"
              description={
                <>
                  <ul>
                    <li>
                      Performed vulnerability assessments and penetration tests on company systems, 
                      identifying critical vulnerabilities and high-risk vulnerabilities.
                    </li>
                    <li>
                      Assisted in the successful completion of 2 compliance audits,
                     ensuring adherence to regulations such as ISO 27001, GDPR, and HIPAA.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1DBaRd5ZmrHzZgHZldgzhyJypMGvANYM3/view?usp=sharing"
              lorlink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calan}
              isBlog={false}
              title="Calanjiyam Consultancies and Technologies"
              post="Junior Associate Software and Web Developer"
              date="Feb 2024 - May 2024"
              location="Remote, Tamilnadu, India"
              description={
                <>
                  <ul>
                    <li>
                    Directed a team of 3 interns, resulting in a 20% improvement in internal web application invoice management 
                    project efficiency through effective task delegation and coordination
                    </li>
                    <li>
                    Received the Intern of the Week award for exceptional contributions, highlighting a 25% increase in productivity 
                    and project quality as recognized by team members and supervisors.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1P8zdM4luogElL-0ns9kDQufopy0vXsVy/view?usp=sharing"
              // add space between cerLink and lorLink

              
              lorlink="https://drive.google.com/file/d/1BpLaOrQsdNhMMJ4h3Tf3utiLxlnTZDQC/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={csr}
              isBlog={false}
              title=" CSRBOX"
              post="Data Analytics Intern"
              date="Nov 2023 - Nov 2023"
              location="Remote, India"
              description={
                <>
                  <ul>
                    <li>
                    Worked on data cleaning and analysis of more than 750 datasets of internship project. 
                    </li>
                    <li>
                    
                    Learnt, gained experience and implemented tasks using NumPy and Pandas (Python libraries).
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1mYUcEshTJDgUOzi_BioP4jvkn8mIWkq5/view?usp=sharing"
              lorlink="#"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
