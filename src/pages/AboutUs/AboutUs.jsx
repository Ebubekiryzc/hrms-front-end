import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EYItem from "../../utilities/customComponents/EYItem/EYItem";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="page-title">
        <h1>About Us</h1>
      </div>
      <section className="text-description-content section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col className="d-flex justify-content-center">
              <p>
                The Human Resources Management System (HRMS) is a project that
                emerged as a result of the assignments given in the kodlama.io
                Java Spring and React camp and continues to be developed.
              </p>
              <div className="effect-wrap">
                <FontAwesomeIcon icon="plus" className="effect effect-3" />
                <FontAwesomeIcon
                  icon="circle-notch"
                  className=" effect effect-5"
                />
                <FontAwesomeIcon icon="plus" className="effect effect-4" />
                <FontAwesomeIcon icon="asterisk" className="effect effect-7" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="why-hrms section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="section-title">
                <h2>
                  Why <span>HRMS</span>
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center why-hrms-cards">
            <Col xs="6" md="4" className="d-flex justify-content-center">
              <EYItem
                className="card"
                h3Content={
                  <div>
                    <FontAwesomeIcon
                      icon="user-tie"
                      className="card-icon usertie"
                    />
                    <br />
                    <span className="card-header-text">Best Candidate</span>
                  </div>
                }
                spanText="Find best qualified candidate for your needs."
              />
            </Col>
            <Col xs="6" md="4" className="d-flex justify-content-center">
              <EYItem
                className="card"
                h3Content={
                  <div>
                    <FontAwesomeIcon
                      icon="hourglass-half"
                      className="card-icon hourglass"
                    />
                    <br />
                    <span className="card-header-text">Achieve Your Dream</span>
                  </div>
                }
                spanText="Find your dream job in a super limited time."
              />
            </Col>
            <Col xs="6" md="4" className="d-flex justify-content-center">
              <EYItem
                className="card"
                h3Content={
                  <div>
                    <FontAwesomeIcon icon="bolt" className="card-icon bolt" />
                    <br />
                    <span className="card-header-text">Manage Faster</span>
                  </div>
                }
                spanText="Easier staff management for companies."
              />
            </Col>
            <Col xs="6" md="4" className="d-flex justify-content-center">
              <EYItem
                className="card"
                h3Content={
                  <div>
                    <FontAwesomeIcon
                      icon="check-circle"
                      className="card-icon check"
                    />
                    <br />
                    <span className="card-header-text">In Your Profession</span>
                  </div>
                }
                spanText="Apply in the fields that you are most interested in and that can lead you to success."
              />
            </Col>
            <Col xs="6" md="4" className="d-flex justify-content-center">
              <EYItem
                className="card"
                h3Content={
                  <div>
                    <FontAwesomeIcon
                      icon="thumbs-up"
                      className="card-icon thumbs-up"
                    />
                    <br />
                    <span className="card-header-text">Verified Companies</span>
                  </div>
                }
                spanText="All companies are verified by our staff to prevent users from being scammed."
              />
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}
