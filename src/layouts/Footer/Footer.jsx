import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6">
            <div className="footer-col">
              <h3>About us</h3>
              <p>
                Prepared by Ebubekir YAZICI for kodlama.io assignments.
              </p>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="footer-col">
              <h3>Job Categories</h3>
              <ul>
                <li>
                  <a href="#b">Software Developer</a>
                </li>
                <li>
                  <a href="#a">Analyst</a>
                </li>
                <li>
                  <a href="#c">Sport</a>
                </li>
                <li>
                  <a href="#d">Food & Beverage</a>
                </li>
                <li>
                  <a href="#e">More</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink exact to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink exact to="/jobadvertisements">Job Advertisements</NavLink>
                </li>
                <li>
                  <NavLink exact to="/companies">Companies</NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="footer-col">
              <h3>Social Pages</h3>
              <ul>
                <li>
                  <NavLink to="http://www.instagram.com/ebubekiryzc/">Instagram</NavLink>
                </li>
                <li>
                  <a href="#a">Github</a>
                </li>
                <li>
                  <a href="#a">Linked in</a>
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
