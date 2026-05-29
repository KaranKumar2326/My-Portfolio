import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      {/* Main Footer Row */}
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Karan</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} PS</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/KaranKumar2326"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://twitter.com/KaranKumar7107"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/karankumar7107/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      {/* Sponsor Section */}
      <Row className="justify-content-center mt-4">
        <Col md="4" className="text-center">
          <a
            href="https://github.com/sponsors/KaranKumar2326"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "16px",
                padding: "18px",
                color: "white",
                backdropFilter: "blur(10px)",
                transition: "0.3s ease",
                cursor: "pointer",
              }}
            >
              <h5 style={{ marginBottom: "8px" }}>
                ❤️ Support My Work
              </h5>

              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  opacity: 0.8,
                }}
              >
                Sponsor me on GitHub to support open-source
                projects and development.
              </p>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
