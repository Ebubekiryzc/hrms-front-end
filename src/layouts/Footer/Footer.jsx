import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6">
            <div className="footer-col">
              <h3>About us</h3>
              <p>Prepared by Ebubekir YAZICI for kodlama.io assignments.</p>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="footer-col">
              <h3>Job Categories</h3>
              <ul>
                <li>
                  <NavLink exact to="/jobs/1">
                    Software Developer
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/jobs/2">
                    Analyst
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/jobs/3">
                    Sport
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/jobs/4">
                    Food & Beverage
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/jobs">
                    More
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/about">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/jobadvertisements">
                    Job Advertisements
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/companies">
                    Companies
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="footer-col">
              <h3>Social Pages</h3>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/ebubekiryzc/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ebubekiryzc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ebubekir-yazıcı-4b32381a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linked in
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <p className="copyright-text">&copy;2021 @ Ebubekir YAZICI</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
