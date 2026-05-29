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

      {/* Sponsor Card Row */}
      <Row className="justify-content-center mt-4">
        <Col md="6">
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://github.com/sponsors/KaranKumar2326/card"
              title="Sponsor KaranKumar2326"
              height="225"
              width="100%"
              style={{
                border: 0,
                maxWidth: "100%",
              }}
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
